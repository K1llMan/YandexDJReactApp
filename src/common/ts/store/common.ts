import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

/**
 * Функция обновления состояния по заданному пути
 * @param state Состояние
 * @param path Путь
 * @param value Значение
 */
let updatePath = (state: any, path: string, value: any): any => {
    if (path == '')
        return value;

    // Формирование ключа и пути для следующего шага
    let parts = path.split('.');
    let key = parts.shift();
    path = parts.join('.');

    let nextObj = state[key];

    // Присвоение значения объекту
    let obj = updatePath(nextObj ? nextObj : Array.isArray(state) ? [] : {}, path, value);

    if (Array.isArray(state)) {
        let index = parseInt(key);
        return [...state.slice(0, index), obj, ...state.slice(index + 1)];
    }

    return { ...state, [key]: obj };
}

/**
 * Формирование рудуктора
 * @param actions Список действий
 */
export const getReducer = (actions: any) => {
    return (state: any, action: any) => {


        if (Object.keys(actions).includes(action.type))
            return updatePath(state, action.payload.path, action.payload.data);

        return state;
    }
}

/**
 * Формирование логгера
 * @param skipList Список действий для пропуска
 */
let logger = (skipList: string[]) => createLogger({
    predicate: (getState, action) => skipList && !skipList.includes(action.type) || true,
    level: 'info',
    collapsed: true
});

/**
 * Формивание хранилища
 * @param reducer Редукторы
 * @param initialState Начальное состояние
 * @param skipList Список действий для пропуска
 */
export default function configureStore(reducer: any, initialState: any, skipList: string[]) {
    const middleware = [
        thunk,
        logger(skipList)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers: any[] = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    /*
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }
    */

    return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
