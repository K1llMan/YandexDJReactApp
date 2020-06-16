import React from 'react';

import { combineClassNames } from '@yandex.dj/common'

export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Form = (props: FormProps) => {
    return (
        <div className={combineClassNames(['Form', props.className])}>
            {props.children}
        </div>
    );
};

export default Form;
