import React from 'react';

import { getGainController } from '@Yandex.DJ/common';
import ReactJkMusicPlayer, { ReactJkMusicPlayerInstance } from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

export interface MusicPlayerFormProps {
    tracks: any[],
    onGetSongLink?: (type: string, id: string) => string
    onChangeSong?: (songName: string) => void
}

let gainController = (value: number) => { };

const MusicPlayer = (props: MusicPlayerFormProps) => {
    let audio = null;
    let audioLists = []

    if (props.tracks)
        audioLists = props.tracks.map((t: any) => {
            return {
                name: t.title,
                singer: t.artist,
                cover: t.cover,
                gain: t.gain,
                musicSrc: () =>
                    fetch(props.onGetSongLink(t.type, t.id))
                        .then(data => data.text())
            }
        });


    let getAudio = (audioElement: ReactJkMusicPlayerInstance) => {
        audio = audioElement;

        gainController = getGainController(audio);
    };

    let changeGain = (gain: number) => {
        if (gainController)
            gainController(gain);
    }

    return (
        <ReactJkMusicPlayer
            getAudioInstance={getAudio}
            preload={false}
            autoPlay={false}
            audioLists={audioLists}
            mode='full'
            onAudioPlay={(audioInfo: any) => {
                changeGain(audioInfo.gain);
                props.onChangeSong(`${audioInfo.singer} - ${audioInfo.name}`)
            }}
            onAudioPause={() => props.onChangeSong('Пауза')}
        />
    );
};

export default MusicPlayer;
