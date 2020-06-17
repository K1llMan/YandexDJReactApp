import React from 'react';

import ReactJkMusicPlayer from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

export interface MusicPlayerFormProps {
    tracks: any[],
    onGetSongLink?: (type: string, id: string) => string
    onChangeSong?: (songName: string) => void
}

const MusicPlayer = (props: MusicPlayerFormProps) => {
    let audioLists = []
    if (props.tracks)
        audioLists = props.tracks.map((t: any) => {
            return {
                name: t.title,
                singer: t.artist,
                cover: t.cover,
                musicSrc: () =>
                    fetch(props.onGetSongLink(t.type, t.id))
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
