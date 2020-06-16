import React from 'react';

import '../../scss/root.scss';

import { API, Form, PlaylistsContainer, MusicPlayer } from '@Yandex.DJ/service-common';

export interface MusicPlayerFormProps {
    playlists: any[],
    currentPlaylist: any
}

const MusicPlayerForm = (props: MusicPlayerFormProps) => {
    return (
        <Form>
            <PlaylistsContainer
                playlists={props.playlists}
                onAdd={API.addToPlaylist}
                onAddAll={API.addAllToPlaylist}
            />
            <MusicPlayer 
                tracks={props.currentPlaylist}
                onChangeSong={API.changeCurrentSong}
            />
        </Form>
    );
};

export default MusicPlayerForm;
