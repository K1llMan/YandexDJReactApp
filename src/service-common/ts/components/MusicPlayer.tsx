import React from 'react';

import ReactJkMusicPlayer from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

export interface MusicPlayerFormProps {
    tracks: any[],
    onChangeSong?: (songName: string) => void
}

const MusicPlayer = (props: MusicPlayerFormProps) => {
    let audioLists = []
    if (props.tracks)
        audioLists = props.tracks.map((t: any, i: number) => {
            return {
                index: t.index,
                name: t.name,
                singer: t.singer,
                cover: t.cover,
                musicSrc: () =>
                    fetch(`api/yandexmusic/track?key=${t.key}`)
                        .then(data => data.text())
                        .then(link => link)
            }
        });

    return (
        <ReactJkMusicPlayer
            preload={false}
            autoPlay={false}
            audioLists={audioLists}
            mode='full'
            onAudioPlay={(audioInfo: any) => props.onChangeSong(`${audioInfo.singer} - ${audioInfo.name}`)}
            onAudioPause={() => props.onChangeSong('Пауза')}
        />
    );
};

export default MusicPlayer;
