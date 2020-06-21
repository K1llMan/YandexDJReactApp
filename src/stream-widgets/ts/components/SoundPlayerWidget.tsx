import React from 'react';

import Widget, { WidgetProps } from './Widget'

export interface SoundPLayerWidgetProps extends WidgetProps {
    speech: string,
    onPlayEnded:() => void
}

const SoundPlayerWidget = (props: SoundPLayerWidgetProps) => {
    return (
        <Widget className='SoundPlayerWidget' top={props.top} left={props.left} width={props.width} height={props.height}>
            <audio autoPlay={true} src={props.speech} onEnded={() => {
                props.onPlayEnded();
            }} />
        </Widget>
    );
};

export default SoundPlayerWidget;