import React from 'react';

import Widget, { WidgetProps } from './Widget'

export interface SoundPLayerWidgetProps extends WidgetProps {
    sound: string,
    onPlayEnded?:() => void
}

const SoundPlayerWidget = (props: SoundPLayerWidgetProps) => {
    return (
        <Widget className='SoundPlayerWidget' {...props}>
            <audio autoPlay={true} src={props.sound} onEnded={() => {
                props.onPlayEnded();
            }} />
        </Widget>
    );
};

export default SoundPlayerWidget;