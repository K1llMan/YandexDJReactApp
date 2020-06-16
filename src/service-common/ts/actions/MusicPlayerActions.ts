import MusicPlayerStore, { ActionTypes } from '../store/MusicPlayerStore';

import { getActions } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
const functionBindings = {
    // Получение плейлистов
    getPlaylists: ActionTypes.GET_PLAYLISTS,
    // Добавление трека в текущий плейлист
    addTrack: ActionTypes.ADD_TRACK,
};

export const Actions = getActions(MusicPlayerStore, functionBindings);