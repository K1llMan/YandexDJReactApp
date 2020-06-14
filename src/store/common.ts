import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

let updateState = (state: any, path: string, value: any) => {
    return state;
}

export function getReducer(initialState: any, types: string[]) {
    return (state, action) => {
        state = state || initialState;

        if (types.includes(action.type))
            return state;
        //updateState(state, action)

        return state;
    };
}

let logger = (skipList: string[]) => createLogger({
    predicate: (getState, action) => skipList && !skipList.includes(action.type) || true
});

export default function configureStore(reducers: any, history: any, initialState: any, skipList: string[]) {
    const middleware = [
        thunk,
        routerMiddleware(history),
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

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
