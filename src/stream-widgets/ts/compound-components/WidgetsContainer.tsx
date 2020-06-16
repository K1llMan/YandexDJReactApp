import React from 'react';

import { combineClassNames } from '@yandex.dj/common'

export interface WidgetsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const WidgetsContainer = (props: WidgetsContainerProps) => {
    return (
        <div className={combineClassNames(['WidgetsContainer', props.className])}>
            {props.children}
        </div>
    );
};

export default WidgetsContainer;
