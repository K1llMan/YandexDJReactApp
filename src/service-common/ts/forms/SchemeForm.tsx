import React from 'react';

import '../../scss/root.scss';

import { API, Form, SchemesList } from '@Yandex.DJ/service-common';
import { WidgetsContainer } from '@Yandex.DJ/stream-widgets';

export interface SchemeFormProps {
    schemes: any[],
    scheme: any
}

const SchemeForm = (props: SchemeFormProps) => {
    return (
        <Form className='SchemeForm'>
            <div className='list'>
                <SchemesList schemes={props.schemes} onApply={(scheme: any) => API.setScheme(scheme)} />
            </div>
        </Form>
    );
};

export default SchemeForm;
