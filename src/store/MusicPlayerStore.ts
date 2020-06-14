import configureStore, { getReducer } from './common';

let initialState = {
    playlists: []
}

export const actionTypes: string[] = [
    'INIT_PLAYLISTS'
];

let reducers = {
    music: getReducer(initialState, actionTypes)
}

const MusicPlayerStore = configureStore(reducers, {}, {}, null);

export default MusicPlayerStore;