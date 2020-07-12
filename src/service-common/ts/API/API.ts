import { batch } from 'react-redux';

import { Actions } from '../actions/MusicPlayerActions'
import MusicPlayerStore from '../store/MusicPlayerStore'
import { get, post, makePath } from '@yandex.dj/common';

let getPath = (path: string) => makePath('api/StreamingService', path);

export const API = {
    getPlaylists: () => {
        return get(getPath('playlists'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getPlaylists(`groups`, data);
            })
    },
    updatePlaylists: (type: string) => {
        return get(getPath(`playlists/update?type=${type}`));
    },    
    getPlaylist: (type: string, id: string) => {
        return get(getPath(`playlist?type=${type}&id=${id}`))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getPlaylist(`playlist`, data);
            })
    },
    getSongLink: (type: string, id: string) => {
        return getPath(`track?type=${type}&id=${id}`);
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
    },
    getSchemes: () => {
        get(getPath('schemes'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.addSchemes(`schemes`, data);
            })
    },
    setScheme: (scheme: any) => {
        Actions.addCurrentScheme(`scheme`, scheme);
    },
    applyScheme: (scheme: any) => {
        post(getPath('scheme'), scheme);
    },
    resizeWidget: (schemeIndex: number, i: number, width: number, height: number) => {
        let widgetData = MusicPlayerStore.getState().schemes[schemeIndex].widgets[i];
        let newData = {
            ...widgetData,
            width: width,
            height: height
        }

        Actions.resizeWidget(`schemes.${schemeIndex}.widgets.${i}`, newData);
    },
    dragWidget: (schemeIndex: number, i: number, x: number, y: number) => {
        let widgetData = MusicPlayerStore.getState().schemes[schemeIndex].widgets[i];
        let newData = {
            ...widgetData,
            x: x,
            y: y
        }

        Actions.dragWidget(`schemes.${schemeIndex}.widgets.${i}`, newData);
    },
    setFullscreen: (enable: boolean) => {
        Actions.setFullscreen(`fullscreen`, enable);
    }
}