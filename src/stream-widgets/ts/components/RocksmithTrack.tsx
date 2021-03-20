import React from 'react';
import { RocksmithTrackArrangement } from '../enums/RocksmithTrackArrangement';

import { IRocksmithTrack } from '../interfaces/interfaces';

export interface IRocksmithTrackProps {
    track: IRocksmithTrack
}

const RocksmithTrack = (props: IRocksmithTrackProps) => {
    return (
        <div
            className='RocksmithTrack'
            {...props}
        >
            [<span className='arrangement'>{RocksmithTrackArrangement[props.track.arrangementType]}</span>]&nbsp;
            <span className='artist'>{props.track.artist}</span>&nbsp;-&nbsp;
            <span className='name'>{props.track.name}</span>
            &nbsp;от&nbsp;
            <span className='user'>{props.track.user}</span>
        </div>
    );
};

export default RocksmithTrack;
