import MusicPlayerStore, { ActionTypes } from '../store/MusicPlayerStore';

import { getAction } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
export const Actions = {
    /**
     * Обновления данных из сокета
     */
    updateFromSocket: getAction(MusicPlayerStore, ActionTypes.UPDATE_FROM_SOCKET),
    /**
     * Получение плейлистов
     */
    getPlaylists: getAction(MusicPlayerStore, ActionTypes.GET_PLAYLISTS),
    /**
     * Получение содержимого плейлиста
     */
    getPlaylist: getAction(MusicPlayerStore, ActionTypes.GET_PLAYLIST),
    /**
     * Добавление трека в текущий плейлист
     */
    addTrack: getAction(MusicPlayerStore, ActionTypes.ADD_TRACK),
    /**
     * Добавление схем
     */
    addSchemes: getAction(MusicPlayerStore, ActionTypes.ADD_SCHEMES),
    /**
     * Добавление текущей схемы
     */
    addCurrentScheme: getAction(MusicPlayerStore, ActionTypes.ADD_CURRENT_SCHEME),
    /**
     * Смена размера виджета
     */
    resizeWidget: getAction(MusicPlayerStore, ActionTypes.RESIZE_WIDGET),
    /**
     * Перетаскивание виджета
     */
    dragWidget: getAction(MusicPlayerStore, ActionTypes.DRAG_WIDGET),
    /**
     * Добавление текущего виджета
     */
    addCurrentWidget: getAction(MusicPlayerStore, ActionTypes.ADD_CURRENT_WIDGET),
    /**
     * Удаление виджета
     */
    removeWidget: getAction(MusicPlayerStore, ActionTypes.REMOVE_WIDGET),
    /**
     * Установка видимости виджета
     */
    setVisibility: getAction(MusicPlayerStore, ActionTypes.SET_WIDGET_VISIBILITY),
    /**
     * Установка уровня виджета
     */
    setOrder: getAction(MusicPlayerStore, ActionTypes.SET_WIDGET_ORDER),
    /**
     * Включение полноэкранного режима
     */
    setFullscreen: getAction(MusicPlayerStore, ActionTypes.SET_FULLSCREEN),
    /**
     * Получение списка треков
     */
     getTracks: getAction(MusicPlayerStore, ActionTypes.GET_TRACKS),
    /**
     * Удаление трека
     */
    removeTrack: getAction(MusicPlayerStore, ActionTypes.REMOVE_TRACK),
};