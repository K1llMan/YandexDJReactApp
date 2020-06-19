import React from 'react';

import { PlaylistRecord } from '@Yandex.DJ/service-common';
import { combineClassNames } from '@yandex.dj/common'

export interface PlaylistProps {
    visible: boolean,
    playlist: any,
    onAdd?: (track: any) => void,
    onAddAll?: (track: any[]) => void,
    onClose?: () => void,
}

const Playlist = (props: PlaylistProps) => {
    if (!props.playlist)
        return null;

    return (
        <div className={combineClassNames(['Playlist', props.visible ? '' : 'hide'])}>
            <div className='header'>
                <div className='info'>
                    <div className='coverContainer'>
                        <img src={`${props.playlist.cover}`} />
                    </div>
                    <div className='title'>{props.playlist.title}</div>
                    <button className='icon-button' onClick={() => props.onAddAll(props.playlist.tracks)}><i className="IconsFont">plus</i></button>
                </div>
                <button className='icon-button' onClick={props.onClose}><i className="IconsFont">close</i></button>
            </div>
            <div className='tracks'>
                {props.playlist.tracks
                    ? props.playlist.tracks.map((t: any, i: number) => <PlaylistRecord key={i} track={t} onAdd={props.onAdd} />)
                    : null
                }
            </div>
        </div>
    );
};

export default Playlist;
