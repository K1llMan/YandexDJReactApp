import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    playlists: [],
    playlist: {},
    currentPlaylist: []
}

export const ActionTypes = {
    GET_PLAYLISTS: 'GET_PLAYLISTS',
    GET_PLAYLIST: 'GET_PLAYLIST',
    ADD_TRACK: 'ADD_TRACK',
};

const MusicPlayerStore = configureStore(getReducer(ActionTypes), initialState, null);

export default MusicPlayerStore;