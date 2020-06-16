import React, { useState } from 'react';

import { Playlist } from '@Yandex.DJ/service-common';

export interface PlaylistCoverProps {
    playlist: any,
    onAdd?: (track: any) => void,
    onAddAll?: (track: any[]) => void,    
}

const PlaylistCover = (props: PlaylistCoverProps) => {
    const [show, setShow] = useState(false);

    let showList = () => setShow(!show);

    return (
        <div className='PlaylistCover'>
            <img src={`${props.playlist.cover}`} onClick={showList} />
            <div>{props.playlist.title}</div>
            <Playlist
                visible={show}
                playlist={props.playlist}
                onAdd={props.onAdd}
                onAddAll={props.onAddAll}
                onClose={showList}
            />
        </div>
    );
};

export default PlaylistCover;
