import React from 'react';
import { Rnd, DraggableData } from 'react-rnd';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    editMode: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    onResize?: (width: number, height: number) => void,
    onDragEnds?: (x: number, y: number) => void,
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

    return (
        <Rnd
            position={{ x: props.x, y: props.y }}
            size={{ width: props.width, height: props.height }}
            className={combineClassNames(['Widget', props.className])}
            enableResizing={getEnable(props.editMode)}
            disableDragging={!props.editMode}
            onResizeStop={onResizeStop}
            onDragStop={onDragStop}
            bounds='parent'
        >
            <div className='tools'>
                <button className='icon-button'><i className="IconsFont">refresh</i></button>
                <button className='icon-button'><i className="IconsFont">plus</i></button>
                <button className='icon-button'><i className="IconsFont">close</i></button>
            </div>
            {props.children}
        </Rnd>
    );
};

export default Widget;
