import React, { useState } from 'react';

import { Playlist, PlaylistsGroup } from '@Yandex.DJ/service-common';

export interface PlaylistsContainerProps {
    groups: any[]
    playlist: any,
    onUpdatePlaylists: (type: string) => void,
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
            {props.groups
                ? props.groups.map((g: any, i: number) =>
                    <PlaylistsGroup
                        key={i}
                        type={g.group}
                        playlists={g.playlists}
                        onOpenPlaylist={showList}
                        onUpdate={props.onUpdatePlaylists}
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
