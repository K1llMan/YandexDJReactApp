import React from 'react';
import { Rnd, DraggableData } from 'react-rnd';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    editMode?: boolean,
    visible?: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    order: number,
    onResize?: (width: number, height: number) => void,
    onDragEnds?: (x: number, y: number) => void,
    onChangeVisibility?: (visible: boolean) => void
    onChangeOrder?: (order: number) => void
}

let getEnable = (value: boolean) => {
    return {
        bottom: value,
        bottomRight: value,
        right: value,
    }
}

const Widget = (props: WidgetProps) => {
    let onResizeStop = (event: MouseEvent | TouchEvent, direction: string, ref: HTMLElement, delta: any) => {
        if (props.onResize)
            props.onResize(props.width + delta.width, props.height + delta.height);
    };

    let onDragStop = (event: MouseEvent | TouchEvent, data: DraggableData) => {
        if (props.onDragEnds)
            props.onDragEnds(data.x, data.y);
    }

    let onChangeVisibility = () => {
        if (props.onChangeVisibility)
            props.onChangeVisibility(!props.visible);
    }

    let onChangeOrder = (order: number) => {
        if (props.onChangeOrder)
            props.onChangeOrder(order);
    }

    return (
        <Rnd
            position={{ x: props.x, y: props.y }}
            size={{ width: props.width, height: props.height }}
            className={combineClassNames(['Widget', props.className])}
            style={{ zIndex: props.order }}
            enableResizing={getEnable(props.editMode)}
            disableDragging={!props.editMode}
            onResizeStop={onResizeStop}
            onDragStop={onDragStop}
            bounds='parent'
        >
            { props.editMode
                ? <div className='tools'>
                    <button className='icon-button' onClick={onChangeVisibility}><i className="IconsFont">{props.visible ? 'visibility' : 'visibility_off'} </i></button>
                    <button className='icon-button' onClick={() => onChangeOrder(props.order + 1)}><i className="IconsFont">plus</i></button>
                    <div className='order'>{props.order}</div>
                    <button className='icon-button' onClick={() => onChangeOrder(Math.max(0, props.order - 1))}><i className="IconsFont">minus</i></button>
                </div>
                : null
            }
            {props.children}
        </Rnd>
    );
};

export default Widget;
