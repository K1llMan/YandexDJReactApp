import React from 'react';

import { PlaylistCover } from '@Yandex.DJ/service-common';

export interface PlaylistsGroupProps {
    type: string
    playlists: any[],
    onOpenPlaylist: (type: string, id: string) => void,
    onUpdate: (type: string) => void
}

let getHeader = (type: string) => {
    switch (type) {
        case "Local": return "Локальные";
        case "Yandex": return "Яндекс";
    }
}

const PlaylistsGroup = (props: PlaylistsGroupProps) => {
    return (
        <div className='PlaylistsGroup'>
            <div className="header">
                {getHeader(props.type)}
                <button className='icon-button' onClick={() => props.onUpdate(props.type)}><i className="IconsFont">refresh</i></button>
            </div>
            <div className="content">
                {props.playlists
                    ? props.playlists.map((p: any, i: number) =>
                        <PlaylistCover
                            key={i}
                            playlist={p}
                            onClick={() => props.onOpenPlaylist(p.type, p.id)}
                        />)
                    : null
                }
            </div>
        </div>
    );
};

export default PlaylistsGroup;
