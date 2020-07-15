import React, { useState } from 'react';

import { SchemeRecord } from '@Yandex.DJ/service-common';

export interface SchemesListProps {
    schemes?: any[],
    scheme?: number,
    onSelect?: (scheme: any) => void
    onApply?: (scheme: any) => void
}

const SchemesList = (props: SchemesListProps) => {
    return (
        <div className='SchemesList'>
            <div className='title'>Схемы</div>
            {props.schemes
                ? props.schemes.map((s: any, i: number) => <SchemeRecord
                    key={i}
                    active={i == props.scheme}
                    schemeIndex={i}
                    scheme={s}
                    onSelect={props.onSelect}
                    onApply={props.onApply}
                />)
                : null
            }
        </div>
    );
};

export default SchemesList;
