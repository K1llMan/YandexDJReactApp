import React from 'react';

import Widget, { WidgetProps } from './Widget'

export interface SongWidgetProps extends WidgetProps {
    song: string
}

const SongWidget = (props: SongWidgetProps) => {
    return (
        <Widget
            className='SongWidget'
            {...props}
        >
            <div className='title'>{props.song}</div>
        </Widget>
    );
};

export default SongWidget;
