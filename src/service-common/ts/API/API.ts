import { batch } from 'react-redux';

import { Actions } from '../actions/MusicPlayerActions'
import MusicPlayerStore from '../store/MusicPlayerStore'
import { get, post, makePath } from '@yandex.dj/common';

let getPath = (path: string) => makePath('api/YandexMusic', path);

export const API = {
    getPlaylists: () => {
        return get(getPath('playlists'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getPlaylists(`playlists`, data);
            })
    },
    addToPlaylist: (track: any) => {
        Actions.addTrack(`currentPlaylist`, [track]);
    },
    addAllToPlaylist: (tracks: any[]) => {
        Actions.addTrack(`currentPlaylist`, tracks);
    },
    changeCurrentSong: (songName: string) => {
        post(getPath('currentSong'), {
            name: songName
        });
    }
}