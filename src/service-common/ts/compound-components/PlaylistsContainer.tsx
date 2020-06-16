import React from 'react';

import { PlaylistCover } from '@Yandex.DJ/service-common';

export interface PlaylistsContainerProps {
    playlists?: any[]
    onAdd?: (track: any) => void,
    onAddAll?: (track: any[]) => void
}

const PlaylistsContainer = (props: PlaylistsContainerProps) => {
    return (
        <div className='PlaylistsContainer'>
            {props.playlists
                ? props.playlists.map((p: any, i: number) =>
                    <PlaylistCover
                        key={i}
                        playlist={p}
                        onAdd={props.onAdd}
                        onAddAll={props.onAddAll}
                    />)
                : null
            }
        </div>
    );
};

export default PlaylistsContainer;
