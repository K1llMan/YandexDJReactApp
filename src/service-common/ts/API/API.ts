import { batch } from 'react-redux';

import { Actions } from '../actions/MusicPlayerActions'
import MusicPlayerStore from '../store/MusicPlayerStore'
import { get, post, makePath, SocketsAPI } from '@yandex.dj/common';
import { IRocksmithTrack } from '@Yandex.DJ/stream-widgets';

let getPath = (path: string) => makePath('api/StreamingService', path);

export const API = {
    ...SocketsAPI,
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
    setScheme: (scheme: number) => {
        batch(() => {
            Actions.addCurrentScheme(`scheme`, scheme);
            Actions.addCurrentWidget(`widget`, -1);
        })
    },
    applyScheme: (scheme: any) => {
        post(getPath('scheme'), scheme);
    },
    getTracks: () => {
        get(getPath('tracks'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getTracks(`rocksmith.tracks`, data);
            });
    },
    removeTrack: (track: IRocksmithTrack) => {
        post(getPath('removeTrack'), track)
            .then((data: any) => {
                if (data && data.isError)
                    return;

                let tracks: IRocksmithTrack[] = [ ...MusicPlayerStore.getState().rocksmith.tracks ];
                let index = tracks.indexOf(track);
                if (index == -1)
                    return;

                tracks.splice(index, 1);
                Actions.removeTrack(`rocksmith.tracks`, tracks);
            });
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
    setWidget: (widget: number) => {
        Actions.addCurrentWidget(`widget`, widget);
    },
    removeWidget: (widget: number) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;
        if (schemeIndex == -1)
            return;

        let scheme = { ...MusicPlayerStore.getState().schemes[schemeIndex] };
        scheme.widgets.splice(widget, 1);

        Actions.removeWidget(`schemes.${schemeIndex}`, scheme);
    },
    setVisibility: (widget: number, visible: boolean) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;

        Actions.setVisibility(`schemes.${schemeIndex}.widgets.${widget}.visible`, visible);
    },
    setOrder: (widget: number, order: number) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;

        Actions.setOrder(`schemes.${schemeIndex}.widgets.${widget}.order`, order);
    },
    setFullscreen: (enable: boolean) => {
        Actions.setFullscreen(`fullscreen`, enable);
    }
}