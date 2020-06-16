import { action } from 'typesafe-actions';

/**
 * Формирование списка действий по описанию
 * @param store 
 * @param actionsInfo 
 */
export function getActions(store: any, actionsInfo: any) {
    let dispatchAction = (act: any, data: any) => store.dispatch(action(act, data));

    let functions = {};
    Object.keys(actionsInfo).map((key: any, i: number) =>
        functions[key] = (path: string, data: any) => dispatchAction(actionsInfo[key], { path: path, data: data })
    );

    return functions;
}