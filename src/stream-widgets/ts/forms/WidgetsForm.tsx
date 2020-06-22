import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import '../../scss/root.scss';

import { Actions } from '../actions/WidgetsActions';
import { WidgetsStore, WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { API } from '../API/API';
import SongWidget from '../components/SongWidget';
import SoundPlayerWidget from '../components/SoundPlayerWidget';


export interface WidgetsFormProps extends React.HTMLAttributes<HTMLDivElement> {
    currentSong: string,
    speech: string
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

    // Получение данных при соединении с сервисом
    API.onSocketConnect(() => API.socketSend('getCurrentSong', []));

    return (
        <WidgetsContainer>
            <SongWidget left={0} top={90} width={30} height={10} song={props.currentSong} />
            <SoundPlayerWidget left={0} top={90} width={30} height={10} speech={props.speech} onPlayEnded={API.clearSound}/>
        </WidgetsContainer>
    );
};

export default WidgetsForm;
