import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    currentSong: 'Test',
    speech: ''
}

export const ActionTypes = {
    UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
    CLEAR_SPEECH: 'CLEAR_SPEECH',
};

const WidgetsStore = configureStore(getReducer(ActionTypes), initialState, null);

export default WidgetsStore;