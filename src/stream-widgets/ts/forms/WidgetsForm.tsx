import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import '../../scss/root.scss';

import { Actions } from '../actions/WidgetsActions';
import { WidgetsStore, WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { API } from '../API/API';
import SongWidget from '../components/SongWidget';
import SoundPlayerWidget from '../components/SoundPlayerWidget';


export interface WidgetsFormProps extends React.HTMLAttributes<HTMLDivElement> {
    scheme: any[],
    currentSong: string,
    sound: string
}

const WidgetsForm = (props: WidgetsFormProps) => {
    if (!API.isSocketConnected())
        API.socketConnect();

    // Формирование обработчиков
    API.addSocketHandler('updateSong', (data: any) => {
        Actions.updateFromSocket('currentSong', data);
    });

    API.addSocketHandler('speech', (data: any) => {
        Actions.updateFromSocket('sound', `api/content/speech?id=${data}`);
    });

    API.addSocketHandler('sound', (data: any) => {
        Actions.updateFromSocket('sound', `api/content/sound?id=${data}`);
    });

    API.addSocketHandler('scheme', (data: any) => {
        Actions.updateFromSocket('scheme', data);
    });    

    // Получение данных при соединении с сервисом
    API.onSocketConnect(() => API.socketSend('getCurrentSong', []));

    /**
     * Создание виджета
     * @param widgetData Параметры виджета
     * @param i Ключ
     */
    let getWidget = (widgetData: any, i: number) => {
        switch (widgetData.type) {
            case 'song': {
                return <SongWidget
                    key={i}
                    left={widgetData.left}
                    top={widgetData.top}
                    width={widgetData.width}
                    height={widgetData.height}
                    song={props.currentSong}
                    onResize={(width: number, height: number) => API.resizeWidget(i, width, height)}
                />
            }
            case 'soundPlayer': {
                return <SoundPlayerWidget
                    key={i}
                    left={widgetData.left}
                    top={widgetData.top}
                    width={widgetData.width}
                    height={widgetData.height}
                    sound={props.sound}
                    onPlayEnded={API.clearSound}
                    onResize={(width: number, height: number) => API.resizeWidget(i, width, height)}
                />
            }
        }
    }

    let getWidgets = () => {
        return props.scheme.map((data: any, i: number) => getWidget(data, i));
    }

    return (
        <WidgetsContainer>
            {getWidgets()}
        </WidgetsContainer>
    );
};

export default WidgetsForm;
