import React from 'react';

import Widget, { WidgetProps } from './Widget'

export interface SoundPLayerWidgetProps extends WidgetProps {
    sound: string,
    onPlayEnded?:() => void
}

const SoundPlayerWidget = (props: SoundPLayerWidgetProps) => {
    return (
        <Widget className='SoundPlayerWidget' top={props.top} left={props.left} width={props.width} height={props.height} onResize={props.onResize}>
            <audio autoPlay={true} src={props.sound} onEnded={() => {
                props.onPlayEnded();
            }} />
        </Widget>
    );
};

export default SoundPlayerWidget;