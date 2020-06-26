import { get, post, makePath } from '@yandex.dj/common';
import { WebSocketClient } from '@yandex.dj/web-socket-client'; 

import { Actions } from '../actions/WidgetsActions';

let getPath = (path: string) => `ws://${window.location.host}/${path}`;
let getFetchPath = (path: string) => makePath('api/StreamingService', path);

let socketClient = new WebSocketClient();

export const API = {
    isSocketConnected: () => {
        return socketClient.isConnected();
    },
    socketConnect: () => {
        socketClient.connect(getPath('api/ws'));
    },
    socketDisconnect: () => {
        socketClient.disconnect();
    },    
    addSocketHandler: (event: string, handler: (data: any) => void) => {
        socketClient.on(event, handler);
    },
    removeSocketHandler: (event: string, handler: (data: any) => void) => {
        socketClient.removeHandler(event, handler);
    },
    onSocketConnect: (handler: () => void) => {
        socketClient.onConnect(handler);
    },
    socketSend: (event: string, data: any) => {
        socketClient.send({
            event: event,
            data: data
        })
    },
    getSchema: () => {
        return get(getFetchPath('scheme'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.updateScheme(`scheme`, data);
            });
    },
    clearSound: () => {
        Actions.clearSpeech('sound', '');
    }
}