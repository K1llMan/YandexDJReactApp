import React, { useState } from 'react';

export interface PlaylistCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    playlist: any
}

const PlaylistCover = (props: PlaylistCoverProps) => {
    return (
        <div className='PlaylistCover'>
            <div className="coverContainer">
                <img src={`${props.playlist.cover}`} onClick={props.onClick} />
            </div>
            <div>{props.playlist.title}</div>
        </div>
    );
};

export default PlaylistCover;
