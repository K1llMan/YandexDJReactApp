import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    groups: [],
    playlist: {},
    currentPlaylist: [],
    schemes: [],
    scheme: {}
}

export const ActionTypes = {
    GET_PLAYLISTS: 'GET_PLAYLISTS',
    GET_PLAYLIST: 'GET_PLAYLIST',
    ADD_TRACK: 'ADD_TRACK',
    ADD_SCHEMES: 'ADD_SCHEMES',
    ADD_CURRENT_SCHEME: 'ADD_CURRENT_SCHEME'
};

const MusicPlayerStore = configureStore(getReducer(ActionTypes), initialState, null);

export default MusicPlayerStore;