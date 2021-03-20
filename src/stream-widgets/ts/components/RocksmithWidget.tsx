import React from 'react';

import { IRocksmithTrack } from '../interfaces/interfaces';
import Widget, { WidgetProps } from './Widget';
import RocksmithTrack from './RocksmithTrack';

export interface RocksmithWidgetProps extends WidgetProps {
    tracks: IRocksmithTrack[]
    maxCount: number
}

const RocksmithWidget = (props: RocksmithWidgetProps) => {
    return (
        <Widget
            className='RocksmithWidget'
            {...props}
        >
            <div className='title'>Очередь заказов ({props.tracks.length || 0})</div>
            <div className='list'>
                {props.tracks && props.tracks.map((t: IRocksmithTrack, i: number) => <RocksmithTrack key={i} track={t} />) }
            </div>
        </Widget>
    );
};

export default RocksmithWidget;
