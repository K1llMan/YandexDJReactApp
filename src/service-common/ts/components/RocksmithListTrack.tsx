import { IRocksmithTrack, RocksmithTrackArrangement } from '@Yandex.DJ/stream-widgets';
import React, { useState } from 'react';

export interface RocksmithListListTrackProps extends React.HTMLAttributes<HTMLDivElement> {
    track: IRocksmithTrack,
    onRemove: (track: IRocksmithTrack) => void
}

const RocksmithListListTrack = (props: RocksmithListListTrackProps) => {
    // <img src={`${props.playlist.cover}`} onClick={props.onClick} />
    return (
        <div className='RocksmithListTrack'>
            <div className="trackContainer">
                [<span className='arrangement'>{RocksmithTrackArrangement[props.track.arrangementType]}</span>]&nbsp;
                <span className='name'>{props.track.artist} - {props.track.name} от {props.track.user}</span>
            </div>
            <button className='icon-button' onClick={() => props.onRemove(props.track)}><i className="IconsFont">close</i></button>
        </div>
    );
};

export default RocksmithListListTrack;
