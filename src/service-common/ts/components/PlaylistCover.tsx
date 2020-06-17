import React, { useState } from 'react';

export interface PlaylistCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    playlist: any
}

const PlaylistCover = (props: PlaylistCoverProps) => {
    return (
        <div className='PlaylistCover'>
            <img src={`${props.playlist.cover}`} onClick={props.onClick} />
            <div>{props.playlist.title}</div>
        </div>
    );
};

export default PlaylistCover;
