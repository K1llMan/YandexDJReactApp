import { batch } from 'react-redux';

import { Actions } from '../actions/MusicPlayerActions'
import MusicPlayerStore from '../store/MusicPlayerStore'
import { get, post, makePath, SocketsAPI } from '@yandex.dj/common';
import { IRocksmithTrack } from '@Yandex.DJ/stream-widgets';

let getPath = (path: string) => makePath('api/StreamingService', path);

export const API = {
    ...SocketsAPI,
    /**
     * Получение плейлистов
     */
    getPlaylists: () => {
        return get(getPath('playlists'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getPlaylists(`groups`, data);
            })
    },
    /**
     * Обновление плейлистов
     * @param type Тип провайдера
     * @return Список плейлистов
     */
    updatePlaylists: (type: string) => {
        return get(getPath(`playlists/update?type=${type}`));
    },
    /**
     * Получение плейлиста по id
     * @param type Тип провайдера
     * @param id Идентификатор плейлиста
     * @returns Плейлист
     */
    getPlaylist: (type: string, id: string) => {
        return get(getPath(`playlist?type=${type}&id=${id}`))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getPlaylist(`playlist`, data);
            })
    },
    /**
     * Получение ссылки на песню
     * @param type Тип провайдера
     * @param id Идентификатор песни
     * @returns Ссылка
     */
    getSongLink: (type: string, id: string) => {
        return getPath(`track?type=${type}&id=${id}`);
    },
    /**
     * Добавление трека в плейлист
     * @param track Трек
     */
    addToPlaylist: (track: any) => {
        Actions.addTrack(`currentPlaylist`, [track]);
    },
    /**
     * Добавление списка треков в плейлист
     * @param tracks Треки
     */
    addAllToPlaylist: (tracks: any[]) => {
        Actions.addTrack(`currentPlaylist`, tracks);
    },
    /**
     * Смена песни
     * @param songName Имя новой песни
     */
    changeCurrentSong: (songName: string) => {
        post(getPath('currentSong'), {
            name: songName
        });
    },
    /**
     * Получение схем
     */
    getSchemes: () => {
        get(getPath('schemes'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.addSchemes(`schemes`, data);
            })
    },
    /**
     * Получение схемы
     * @param scheme Номер схемы
     */
    setScheme: (scheme: number) => {
        batch(() => {
            Actions.addCurrentScheme(`scheme`, scheme);
            Actions.addCurrentWidget(`widget`, -1);
        })
    },
    /**
     * Применение схемы
     * @param scheme Схема
     */
    applyScheme: (scheme: any) => {
        post(getPath('scheme'), scheme);
    },
    /**
     * Получение списка треков Rocksmith
     */
    getTracks: () => {
        get(getPath('tracks'))
            .then((data: any) => {
                if (!data || data.isError)
                    return;

                Actions.getTracks(`rocksmith.tracks`, data);
            });
    },
    /**
     * Удаление трека из списка Rocksmith
     * @param track Трек
     */
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
    /**
     * Изменение размера виджера
     * @param schemeIndex Индекс схемы
     * @param i Номер виджета
     * @param width Ширина
     * @param height Высота
     */
    resizeWidget: (schemeIndex: number, i: number, width: number, height: number) => {
        let widgetData = MusicPlayerStore.getState().schemes[schemeIndex].widgets[i];
        let newData = {
            ...widgetData,
            width: width,
            height: height
        }

        Actions.resizeWidget(`schemes.${schemeIndex}.widgets.${i}`, newData);
    },
    /**
     * Перемещение виджета
     * @param schemeIndex Индекс схемы
     * @param i Номер виджета
     * @param x Положение по горизонтали
     * @param y Положение по вертикали
     */
    dragWidget: (schemeIndex: number, i: number, x: number, y: number) => {
        let widgetData = MusicPlayerStore.getState().schemes[schemeIndex].widgets[i];
        let newData = {
            ...widgetData,
            x: x,
            y: y
        }

        Actions.dragWidget(`schemes.${schemeIndex}.widgets.${i}`, newData);
    },
    /**
     * Установка виджета
     * @param widget Номер виджета
     */
    setWidget: (widget: number) => {
        Actions.addCurrentWidget(`widget`, widget);
    },
    /**
     * Удаление виджета
     * @param widget Номер виджета
     */
    removeWidget: (widget: number) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;
        if (schemeIndex == -1)
            return;

        let scheme = { ...MusicPlayerStore.getState().schemes[schemeIndex] };
        scheme.widgets.splice(widget, 1);

        Actions.removeWidget(`schemes.${schemeIndex}`, scheme);
    },
    /**
     * Смена видимости виджета
     * @param widget Номер виджета
     * @param visible Видимость
     */
    setVisibility: (widget: number, visible: boolean) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;

        Actions.setVisibility(`schemes.${schemeIndex}.widgets.${widget}.visible`, visible);
    },
    /**
     * Порядок видимости
     * @param widget Номер виджета
     * @param order Порядок
     */
    setOrder: (widget: number, order: number) => {
        let schemeIndex = MusicPlayerStore.getState().scheme;

        Actions.setOrder(`schemes.${schemeIndex}.widgets.${widget}.order`, order);
    },
    /**
     * Управление полноэкранным режимом
     * @param enable Флаг
     */
    setFullscreen: (enable: boolean) => {
        Actions.setFullscreen(`fullscreen`, enable);
    },
    /**
     * Тест сообщений чата
     * @param name Имя пользователя
     * @param message Сообщение
     */
    sendMessage: (name: string, message: string) => {
        post(getPath('chatTest'), {
            user: name,
            message: message
        })
    },    
}