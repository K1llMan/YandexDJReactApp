import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    currentSong: 'Test',
    sound: ''
}

export const ActionTypes = {
    UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
    CLEAR_SOUND: 'CLEAR_SOUND',
};

const WidgetsStore = configureStore(getReducer(ActionTypes), initialState, null);

export default WidgetsStore;