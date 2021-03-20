import { Store } from 'redux';
import { action } from 'typesafe-actions';

/**
 * Формирование списка действий по описанию
 * @param store 
 * @param actionsInfo 
 */
export function getAction(store: Store, type: any) {
    let dispatchAction = (act: any, data: any) => store.dispatch(action(act, data));

    return (path: string, data: any) => dispatchAction(type, { path: path, data: data });
}