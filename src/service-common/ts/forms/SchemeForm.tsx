import React from 'react';

import '../../scss/root.scss';

import Fullscreen from 'react-full-screen';

import { API, Form, SchemesList } from '@Yandex.DJ/service-common';
import { WidgetsContainer, SongWidget, SoundPlayerWidget } from '@Yandex.DJ/stream-widgets';

export interface SchemeFormProps {
    schemes: any[],
    scheme: number,
    fullscreen: boolean
}

let getWidgetsContainerStyle = () => {
    return {
        backgroundColor: 'green'
    }
}

const SchemeForm = (props: SchemeFormProps) => {
    let getWidget = (schemeIndex: number, widgetData: any, i: number) => {
        let commonProps = {
            key: i,
            x: widgetData.x,
            y: widgetData.y,
            width: widgetData.width,
            height: widgetData.height,
            onResize: (width: number, height: number) => API.resizeWidget(schemeIndex, i, width, height),
            onDragEnds: (x: number, y: number) => API.dragWidget(schemeIndex, i, x, y)
        }

        switch (widgetData.type) {
            case 'song': {
                return <SongWidget
                    {...commonProps}
                    song='Тестовое имя песни'
                />
            }
            case 'soundPlayer': {
                return <SoundPlayerWidget
                    {...commonProps}
                    sound=''
                />
            }
        }
    }

    return (
        <Form className='SchemeForm'>
            <div className='list'>
                <SchemesList
                    schemes={props.schemes}
                    onApply={(scheme: any) => API.applyScheme(scheme)}
                    onSelect={(scheme: any) => API.setScheme(scheme)}
                />
                <button onClick={() => API.setFullscreen(true)}>Полный экран</button>
            </div>
            <Fullscreen enabled={props.fullscreen} onChange={(enable: boolean) => API.setFullscreen(enable)}>
                <WidgetsContainer style={{ ...getWidgetsContainerStyle(), display: props.fullscreen ? 'flex' : 'none' }}>
                    {props.schemes[props.scheme] && props.schemes[props.scheme].widgets
                        ? props.schemes[props.scheme].widgets.map((data: any, i: number) => getWidget(props.scheme, data, i))
                        : null
                    }
                </WidgetsContainer>
            </Fullscreen>
        </Form>
    );
};

export default SchemeForm;
