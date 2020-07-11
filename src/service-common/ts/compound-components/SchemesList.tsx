import React, { useState } from 'react';

import { SchemeRecord } from '@Yandex.DJ/service-common';

export interface SchemesListProps {
    schemes?: any[],
    onApply?: (scheme: any) => void
}

const SchemesList = (props: SchemesListProps) => {
    return (
        <div className='SchemesList'>
            { props.schemes 
                ? props.schemes.map((s: any, i: number) => <SchemeRecord key={i} scheme={s} onApply={props.onApply} />)
                : null
            }
        </div>
    );
};

export default SchemesList;
