import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    playlists: [],
    currentPlaylist: []
}

export const ActionTypes = {
    GET_PLAYLISTS: 'GET_PLAYLISTS',
    ADD_TRACK: 'ADD_TRACK',
};

const MusicPlayerStore = configureStore(getReducer(ActionTypes), initialState, null);

export default MusicPlayerStore;