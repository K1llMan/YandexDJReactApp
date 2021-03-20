import { WidgetsStore } from '@Yandex.DJ/stream-widgets';

import { get, post, makePath, SocketsAPI } from '@yandex.dj/common';

import { Actions } from '../actions/WidgetsActions';

let getFetchPath = (path: string) => makePath('api/StreamingService', path);

export const API = {
    ...SocketsAPI,
    getSchema: () => {
        return get(getFetchPath('tracks'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getTracks(`rocksmith.tracks`, data);
            });
    },
    getTracks: () => {
        return get(getFetchPath('scheme'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.updateScheme(`scheme`, data);
            });
    },    
    clearSound: () => {
        Actions.clearSound('sound', '');
    }
}