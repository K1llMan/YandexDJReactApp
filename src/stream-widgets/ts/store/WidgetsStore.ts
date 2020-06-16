import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    currentSong: 'Test'
}

export const ActionTypes = {
    UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET'
};

const WidgetsStore = configureStore(getReducer(ActionTypes), initialState, null);

export default WidgetsStore;