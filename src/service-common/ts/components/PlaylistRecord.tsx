import React from 'react';

export interface PlaylistRecordProps {
    track: any,
    onAdd?: (track: any) => void
}

const PlaylistRecord = (props: PlaylistRecordProps) => {
    return (
        <div className='PlaylistRecord'>
            <div className='title'>{props.track.artist} - {props.track.title}</div>
            <button className='icon-button' onClick={() => props.onAdd(props.track)}><i className="IconsFont">plus</i></button>
        </div>
    );
};

export default PlaylistRecord;
