import React from 'react';

import '../../scss/root.scss';

import Fullscreen from 'react-full-screen';

import { API, Form, SchemesList, WidgetsList } from '@Yandex.DJ/service-common';
import { WidgetsContainer, SongWidget, SoundPlayerWidget } from '@Yandex.DJ/stream-widgets';

export interface SchemeFormProps {
    schemes: any[],
    scheme: number,
    widget: number,
    fullscreen: boolean
}

let getWidgetsContainerStyle = () => {
    return {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'green'
    }
}

const SchemeForm = (props: SchemeFormProps) => {
    let getWidget = (schemeIndex: number, widgetData: any, i: number) => {
        let commonProps = {
            key: i,
            editMode: true,
            ...widgetData,
            onResize: (width: number, height: number) => API.resizeWidget(schemeIndex, i, width, height),
            onDragEnds: (x: number, y: number) => API.dragWidget(schemeIndex, i, x, y),
            onChangeVisibility: (visible: boolean) => API.setVisibility(i, visible),
            onChangeOrder: (order: number) => API.setOrder(i, order),
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
            <div className='toolbar'>
                <button className='icon-button' onClick={API.getSchemes}><i className="IconsFont">refresh</i></button>
                <button className='icon-button' onClick={() => API.setFullscreen(true)}><i className="IconsFont">fullscreen</i></button>
            </div>
            <div className='list'>
                <SchemesList
                    scheme={props.scheme}
                    schemes={props.schemes}
                    onApply={API.applyScheme}
                    onSelect={API.setScheme}
                />
                <WidgetsList
                    scheme={props.scheme}
                    widget={props.widget}
                    schemeData={props.scheme > -1 ? props.schemes[props.scheme] : null}
                    onSelect={API.setWidget}
                    onChangeVisibility={API.setVisibility}
                    onRemove={API.removeWidget}
                />
            </div>

            <Fullscreen enabled={props.fullscreen} onChange={(enable: boolean) => API.setFullscreen(enable)}>
                <WidgetsContainer style={{ ...getWidgetsContainerStyle(), visibility: props.fullscreen ? 'visible' : 'collapse' }}>
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
