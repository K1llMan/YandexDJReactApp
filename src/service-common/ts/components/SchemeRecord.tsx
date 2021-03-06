import React from 'react';

import { combineClassNames } from '@Yandex.Dj/common';

export interface SchemeRecordProps {
    schemeIndex: number,
    scheme: any,
    active: boolean,
    onSelect?: (scheme: number) => void
    onApply?: (scheme: any) => void
}

const SchemeRecord = (props: SchemeRecordProps) => {
    if (!props.scheme)
        return null;

    let apply = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (props.onApply)
            props.onApply(props.scheme);
    }

    let onSelect = () => {
        if (props.onSelect)
            props.onSelect(props.schemeIndex);
    }

    return (
        <div className={combineClassNames(['SchemeRecord', props.active ? 'active' : ''])} onClick={onSelect}>
            <div className='title'>{props.scheme.name}</div>
            <button className='icon-button' onClick={apply}><i className="IconsFont">done</i></button>
        </div>
    );
};

export default SchemeRecord;
