import { configureStore, getReducer } from '@yandex.dj/common';

let initialState = {
    groups: [],
    playlist: {},
    currentPlaylist: [],
    schemes: [
        {
            "name": "default",
            "widgets": [
                {
                    "type": "song",
                    "visible": true,
                    "x": 0,
                    "y": 800,
                    "width": 500,
                    "height": 100,
                    "order":  0
                },
                {
                    "type": "soundPlayer",
                    "visible": true,
                    "x": 0,
                    "y": 0,
                    "width": 500,
                    "height": 100,
                    "order":  0
                }
            ]
        },
        {
            "name": "test",
            "widgets": [
                {
                    "type": "song",
                    "visible": true,
                    "x": 0,
                    "y": 800,
                    "width": 500,
                    "height": 100,
                    "order":  0
                },
                {
                    "type": "soundPlayer",
                    "visible": true,
                    "x": 0,
                    "y": 0,
                    "width": 500,
                    "height": 100,
                    "order":  0
                }
            ]
        }        
    ],
    scheme: -1,
    widget: -1,
    fullscreen: false
}

export const ActionTypes = {
    GET_PLAYLISTS: 'GET_PLAYLISTS',
    GET_PLAYLIST: 'GET_PLAYLIST',
    ADD_TRACK: 'ADD_TRACK',
    ADD_SCHEMES: 'ADD_SCHEMES',
    ADD_CURRENT_SCHEME: 'ADD_CURRENT_SCHEME',
    RESIZE_WIDGET: 'RESIZE_WIDGET',
    DRAG_WIDGET: 'DRAG_WIDGET',
    ADD_CURRENT_WIDGET: 'ADD_CURRENT_WIDGET',
    REMOVE_WIDGET: 'REMOVE_WIDGET',
    SET_WIDGET_VISIBILITY: 'SET_WIDGET_VISIBILITY',
    SET_WIDGET_ORDER: 'SET_WIDGET_ORDER',
    SET_FULLSCREEN: 'SET_FULLSCREEN'
};

const MusicPlayerStore = configureStore(getReducer(ActionTypes), initialState, null);

export default MusicPlayerStore;