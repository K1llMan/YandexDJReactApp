import MusicPlayerStore, { ActionTypes } from '../store/MusicPlayerStore';

import { getActions } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
const functionBindings = {
    // Получение плейлистов
    getPlaylists: ActionTypes.GET_PLAYLISTS,
    // Получение содержимого плейлиста
    getPlaylist: ActionTypes.GET_PLAYLIST,
    // Добавление трека в текущий плейлист
    addTrack: ActionTypes.ADD_TRACK,
    // Добавление схем
    addSchemes: ActionTypes.ADD_SCHEMES,
    // Добавление текущей схемы
    addCurrentScheme: ActionTypes.ADD_CURRENT_SCHEME,
    // Смена размера виджета
    resizeWidget: ActionTypes.RESIZE_WIDGET,
    // Перетаскивание виджета
    dragWidget: ActionTypes.DRAG_WIDGET,
    // Добавление текущего виджета
    addCurrentWidget: ActionTypes.ADD_CURRENT_WIDGET,
    // Удаление виджета
    removeWidget: ActionTypes.REMOVE_WIDGET,       
    // Включение полноэкранного режима
    setFullscreen: ActionTypes.SET_FULLSCREEN
};

export const Actions = getActions(MusicPlayerStore, functionBindings);