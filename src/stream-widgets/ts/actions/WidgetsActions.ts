import WidgetsStore, { ActionTypes } from '../store/WidgetsStore';

import { getAction } from '@Yandex.DJ/common';

// Названия функций с привязкой с действию
export const Actions = {
    /**
     * Обновления данных из сокета
     */
    updateFromSocket: getAction(WidgetsStore, ActionTypes.UPDATE_FROM_SOCKET),
    /**
     * Очистка речи
     */
    clearSound: getAction(WidgetsStore, ActionTypes.CLEAR_SOUND),
    /**
     * Обновление схемы виджетов
     */
    updateScheme: getAction(WidgetsStore, ActionTypes.UPDATE_SCHEME),
    /**
     * Изменение размера виджета
     */
    resizeWidget: getAction(WidgetsStore, ActionTypes.RESIZE_WIDGET),
    /**
     * Перетаскивание виджета
     */
    dragWidget: getAction(WidgetsStore, ActionTypes.DRAG_WIDGET),
    /**
     * Получение треков
     */
     getTracks: getAction(WidgetsStore, ActionTypes.GET_TRACKS)    
};