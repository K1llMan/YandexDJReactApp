import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    scheme:   
    [
        {
            type: 'song',
            x: 0,
            y: 90,
            height: 10,
            width: 30
        },
        {
            type: 'soundPlayer',
            x: 30,
            y: 50,
            height: 10,
            width: 30
        }
    ],
    currentSong: 'Test',
    sound: ''
}

export const ActionTypes = {
    UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
    CLEAR_SOUND: 'CLEAR_SOUND',
    UPDATE_SCHEME: 'UPDATE_SCHEME',
    RESIZE_WIDGET: 'RESIZE_WIDGET',
    DRAG_WIDGET: 'DRAG_WIDGET'
};

const WidgetsStore = configureStore(getReducer(ActionTypes), initialState, null);

export default WidgetsStore;