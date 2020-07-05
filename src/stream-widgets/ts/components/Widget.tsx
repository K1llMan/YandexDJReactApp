import React from 'react';
import { Rnd, DraggableData } from 'react-rnd';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    x: number,
    y: number,
    width: number,
    height: number,
    onResize?: (width: number, height: number) => void,
    onDragEnds?: (x: number, y: number) => void,
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
            onResizeStop={onResizeStop}
            onDragStop={onDragStop}
            bounds='parent'
        >
            {props.children}
        </Rnd>
    );
};

export default Widget;
