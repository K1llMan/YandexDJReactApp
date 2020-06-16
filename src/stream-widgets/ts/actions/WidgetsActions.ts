import WidgetsStore, { ActionTypes } from '../store/WidgetsStore';

import { getActions } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
const functionBindings = {
    // Обновления данных из сокета
    updateFromSocket: ActionTypes.UPDATE_FROM_SOCKET
};

export const Actions = getActions(WidgetsStore, functionBindings);