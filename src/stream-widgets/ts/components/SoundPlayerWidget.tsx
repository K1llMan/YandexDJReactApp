import React, { useEffect } from 'react';

import { getGainController } from '@Yandex.DJ/common';
import Widget, { WidgetProps } from './Widget'

export interface SoundPLayerWidgetProps extends WidgetProps {

}

const SoundPlayerWidget = (props: SoundPLayerWidgetProps) => {
    let gain = 1;

    let refAudio = React.createRef();
    let gainController = null;

    useEffect(() => {
        gainController = getGainController(refAudio.current);
    })

    let changeGain = (value: number) => {
                if (gainController) {
            gain += value;
            gainController(gain);
        }
    }

    return (
        <Widget className='SoundPlayerWidget' top={props.top} left={props.left} width={props.width} height={props.height}>
            <button onClick={() => changeGain(0.1)}>+</button>
            <button onClick={() => changeGain(-0.1)}>-</button>
            <audio ref={refAudio} controls={true}>
                <source src='api/content/track?id=0:1' />
            </audio>            
        </Widget>
    );
};

export default SoundPlayerWidget;