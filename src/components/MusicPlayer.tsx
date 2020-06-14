import React from 'react';
import { connect } from 'react-redux';

import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps, ReactJkMusicPlayerAudioInfo } from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const MusicPlayer = (props: any) => {
    let audioList = props.playlist.map((t: any) => {
        return {
            name: t.name,
            singer: t.singer,
            cover: t.cover,
            musicSrc: () => 
                fetch(`api/yandexmusic/track?key=${t.key}`)
                .then(data => data.text())
                .then(link => link)
        }
    }));

    return (
        <div>
            <ReactJkMusicPlayer
                audioLists={audioList}
                mode='full'
            />
        </div>
    );
};

export default connect()(MusicPlayer);
