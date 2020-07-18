import React from 'react';

import '../../scss/root.scss';

import { Actions } from '../actions/WidgetsActions';
import { WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { API } from '../API/API';
import SongWidget from '../components/SongWidget';
import SoundPlayerWidget from '../components/SoundPlayerWidget';
import { batch } from 'react-redux';


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

    API.addSocketHandler('updateScheme', (data: any) => {
        batch(() => {
            Actions.updateFromSocket('scheme', data.widgets);
            API.clearSound();
        });
    });    

    API.addSocketHandler('speech', (data: any) => {
        Actions.updateFromSocket('sound', `api/content/speech?id=${data}`);
    });

    API.addSocketHandler('sound', (data: any) => {
        Actions.updateFromSocket('sound', `api/content/sound?id=${data}`);
    });

    // Получение данных при соединении с сервисом
    API.onSocketConnect(() => {
        API.socketSend('getCurrentSong', []);
        API.socketSend('getCurrentScheme', []);
    });

    /**
     * Создание виджета
     * @param widgetData Параметры виджета
     * @param i Ключ
     */
    let getWidget = (widgetData: any, i: number) => {
        let commonProps = {
            key: i,
            ...widgetData
        }

        switch (widgetData.type) {
            case 'song': {
                return <SongWidget
                    {...commonProps}
                    song={props.currentSong}
                />
            }
            case 'soundPlayer': {
                return <SoundPlayerWidget
                    {...commonProps}
                    sound={props.sound}
                    onPlayEnded={API.clearSound}
                />
            }
        }
    }

    let getWidgets = () => {
        return props.scheme
            .filter((w: any) => w.visible)
            .map((w: any, i: number) => getWidget(w, i));
    }

    return (
        <WidgetsContainer>
            {getWidgets()}
        </WidgetsContainer>
    );
};

export default WidgetsForm;
