import React, { useState } from 'react';

import { PlaylistCover, Playlist } from '@Yandex.DJ/service-common';

export interface PlaylistsContainerProps {
    playlists?: any[]
    playlist: any,
    onOpenPlaylist: (type: string, id: string) => Promise<void>,
    onAdd?: (track: any) => void,
    onAddAll?: (track: any[]) => void
}

const PlaylistsContainer = (props: PlaylistsContainerProps) => {
    const [show, setShow] = useState(false);

    let showList = (type: string, id: string) => {
        props.onOpenPlaylist(type, id)
        .then(() => setShow(!show));
    }

    return (
        <div className='PlaylistsContainer'>
            {props.playlists
                ? props.playlists.map((p: any, i: number) =>
                    <PlaylistCover
                        key={i}
                        playlist={p}
                        onClick={() => showList(p.type, p.id)}
                    />)
                : null
            }
            <Playlist
                visible={show}
                playlist={props.playlist}
                onAdd={props.onAdd}
                onAddAll={props.onAddAll}
                onClose={() => setShow(!show)}
            />            
        </div>
    );
};

export default PlaylistsContainer;
