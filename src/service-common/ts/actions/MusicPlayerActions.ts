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
};

export const Actions = getActions(MusicPlayerStore, functionBindings);