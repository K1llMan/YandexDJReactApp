import React from 'react';

export interface SchemeRecordProps {
    scheme: any,
    onApply?: (scheme: any) => void
}

const SchemeRecord = (props: SchemeRecordProps) => {
    if (!props.scheme)
        return null;

    let apply = () => {
        if (props.onApply)
            props.onApply(props.scheme);
    }

    return (
        <div className='SchemeRecord'>
            <div className='title'>{props.scheme.name}</div>
            <button className='icon-button' onClick={apply}><i className="IconsFont">plus</i></button>
        </div>
    );
};

export default SchemeRecord;
