import React from 'react';
import { Resizable, ResizeDirection } from 're-resizable';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    left: number,
    top: number,
    width: number,
    height: number,
    onResize?: (width: number, height: number) => void
}

let getPercentResize = (elementRef: HTMLElement, delta: any) => {
    let parent: HTMLElement = elementRef.parentElement;
    return {
        width: delta.width / parent.offsetWidth * 100,
        height: delta.height / parent.offsetHeight * 100
    }
}

const Widget = (props: WidgetProps) => {
    let onResizeStop = (event: MouseEvent | TouchEvent, direction: string, ref: HTMLElement, delta: any) => {
        if (props.onResize) {
            let resize = getPercentResize(ref, delta);
            props.onResize(Math.min(props.width + resize.width, 100), Math.min(props.height + resize.height, 100));
        }
    };

    return (
        <Resizable 
            size={{ width: `${props.width}%`, height: `${props.height}%` }}
            className={combineClassNames(['Widget', props.className])}
            style={{ left: `${props.left}%`, top: `${props.top}%` }}
            onResizeStop={onResizeStop}            
        >
            {props.children}
        </Resizable>

    );
};

export default Widget;
