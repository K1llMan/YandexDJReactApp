import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    scheme: [],
    currentSong: 'Test',
    sound: ''
}

export const ActionTypes = {
    UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
    CLEAR_SOUND: 'CLEAR_SOUND',
    UPDATE_SCHEME: 'UPDATE_SCHEME'
};

const WidgetsStore = configureStore(getReducer(ActionTypes), initialState, null);

export default WidgetsStore;