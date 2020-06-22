import WidgetsStore, { ActionTypes } from '../store/WidgetsStore';

import { getActions } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
const functionBindings = {
    // Обновления данных из сокета
    updateFromSocket: ActionTypes.UPDATE_FROM_SOCKET,
    // Очистка речи
    clearSound: ActionTypes.CLEAR_SOUND,
};

export const Actions = getActions(WidgetsStore, functionBindings);