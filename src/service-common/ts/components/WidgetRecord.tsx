import React from 'react';

import { combineClassNames } from '@Yandex.Dj/common';

export interface WidgetRecordProps {
    schemeIndex: number,
    widgetIndex: number,
    widget: any,
    active: boolean,
    onSelect?: (widget: any) => void
    onRemove?: (scheme: number, widget: number) => void
}

const WidgetRecord = (props: WidgetRecordProps) => {
    if (!props.widget)
        return null;

    let onDelete = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (props.onRemove)
            props.onRemove(props.schemeIndex, props.widgetIndex);
    }

    let onSelect = () => {
        if (props.onSelect)
            props.onSelect(props.widgetIndex);
    }    

    return (
        <div className={combineClassNames(['WidgetRecord', props.active ? 'active' : ''])} onClick={onSelect}>
            <div className='title'>{props.widget.type}</div>
            <button className='icon-button' onClick={onDelete}><i className="IconsFont">close</i></button>
        </div>
    );
};

export default WidgetRecord;
