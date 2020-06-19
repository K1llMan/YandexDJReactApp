import React from 'react';

import '../../scss/root.scss';

import { API, Form, PlaylistsContainer, MusicPlayer } from '@Yandex.DJ/service-common';

export interface MusicPlayerFormProps {
    groups: any[],
    playlist: {},
    currentPlaylist: any
}

const MusicPlayerForm = (props: MusicPlayerFormProps) => {
    return (
        <Form>
            <PlaylistsContainer
                groups={props.groups}
                playlist={props.playlist}
                onUpdatePlaylists={(type: string) => {
                    API.updatePlaylists(type)
                    .then(() => API.getPlaylists())
                }}
                onOpenPlaylist={API.getPlaylist}
                onAdd={API.addToPlaylist}
                onAddAll={API.addAllToPlaylist}
            />
            <MusicPlayer 
                tracks={props.currentPlaylist}
                onGetSongLink={API.getSongLink}
                onChangeSong={API.changeCurrentSong}
            />
        </Form>
    );
};

export default MusicPlayerForm;
