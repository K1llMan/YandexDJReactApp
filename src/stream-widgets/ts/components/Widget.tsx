import React from 'react';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    left: number,
    top: number,
    width: number,
    height: number
}

const Widget = (props: WidgetProps) => {
    return (
        <div style={{ left: `${props.left}%`, top: `${props.top}%`, width: `${props.width}%`, height: `${props.height}%` }}
            className={combineClassNames(['Widget', props.className])}>
            {props.children}
        </div>
    );
};

export default Widget;
