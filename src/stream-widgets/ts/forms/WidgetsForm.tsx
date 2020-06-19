import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import '../../scss/root.scss';

import { Actions } from '../actions/WidgetsActions';
import { WidgetsStore, WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { API } from '../API/API';
import SongWidget from '../components/SongWidget';


export interface WidgetsFormProps extends React.HTMLAttributes<HTMLDivElement> {
    currentSong: string
}

const WidgetsForm = (props: WidgetsFormProps) => {
    if (!API.isSocketConnected())
        API.socketConnect();

    // Формирование обработчиков
    API.addSocketHandler('updateSong', (data: any) => {
        Actions.updateFromSocket('currentSong', data);
        console.log(`Новая песня: ${data}`)
    });

    // Получение данных при соединении с сервисом
    API.onSocketConnect(() => API.socketSend('getCurrentSong', []));

    return (
        <WidgetsContainer>
            <SongWidget left={0} top={90} width={30} height={10} song={props.currentSong} />
        </WidgetsContainer>
    );
};

export default WidgetsForm;
