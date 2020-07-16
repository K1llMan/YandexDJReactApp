import React from 'react';

import { WidgetRecord } from '@Yandex.DJ/service-common';

export interface WidgetsListProps {
    scheme: number,
    widget: number,
    schemeData: any,
    onRemove?: (widget: number) => void,
    onSelect?: (widget: number) => void
}

const WidgetsList = (props: WidgetsListProps) => {
    return (
        <div className='WidgetsList'>
            <div className='title'>Виджеты</div>
            {props.schemeData
                ? props.schemeData.widgets.map((w: any, i: number) => 
                    <WidgetRecord 
                        key={i}
                        active={i == props.widget}
                        schemeIndex={props.scheme}
                        widgetIndex={i}
                        widget={w}
                        onSelect={props.onSelect}
                        onRemove={props.onRemove}
                    />)
                : null
            }
        </div>
    );
};

export default WidgetsList;
