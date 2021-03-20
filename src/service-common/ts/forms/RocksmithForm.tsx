import React from 'react';

import '../../scss/root.scss';

import { API, Form, MusicPlayerStore } from '@Yandex.DJ/service-common';
import { IRocksmithTrack } from '@Yandex.DJ/stream-widgets';
import RocksmithListTrack from '../components/RocksmithListTrack';
import { Actions } from '../actions/MusicPlayerActions';

export interface RocksmithFormProps {
    tracks: IRocksmithTrack[]
}

const initHandlers = () => {
    if (!API.isSocketConnected()) {
        API.socketConnect();

        // Формирование обработчиков
        API.addSocketHandler('updateRocksmithTracks', (data: any) => {
            Actions.updateFromSocket('rocksmith.tracks', data);
        });

        API.addSocketHandler('addRocksmithTrack', (track: any) => {
            let tracks: IRocksmithTrack[] = MusicPlayerStore.getState().rocksmith.tracks;
            Actions.updateFromSocket('rocksmith.tracks', [...tracks, track]);
        });

        // Получение данных при соединении с сервисом
        API.onSocketConnect(() => {
            API.socketSend('getRocksmithTracks', []);
        });
    }
}

const RocksmithForm = (props: RocksmithFormProps) => {
    initHandlers();

    return (
        <Form className='RocksmithForm'>
            <div className='toolbar'>
                <button className='icon-button' onClick={API.getTracks}><i className="IconsFont">refresh</i></button>
            </div>
            <div className='tracksContainer'>
                {props.tracks.map((t: IRocksmithTrack, i: number) => <RocksmithListTrack key={i} track={t} onRemove={API.removeTrack} />)}
            </div>
        </Form>
    );
};

export default RocksmithForm;
