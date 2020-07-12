import React from 'react';

export interface SchemeRecordProps {
    schemeIndex: number,
    scheme: any,
    onSelect?: (scheme: any) => void
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
        <div className='SchemeRecord' onClick={onSelect}>
            <div className='title'>{props.scheme.name}</div>
            <button className='icon-button' onClick={apply}><i className="IconsFont">plus</i></button>
        </div>
    );
};

export default SchemeRecord;
