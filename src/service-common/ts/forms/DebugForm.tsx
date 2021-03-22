import React from 'react';

import '../../scss/root.scss';

import { API, Form } from '@Yandex.DJ/service-common';

export interface DebugFormProps {
}

const DebugForm = (props: DebugFormProps) => {
    let name = React.createRef();
    let text = React.createRef();

    let send = () => {
        API.sendMessage(name.current.value, text.current.value);
    }

    return (
        <Form className='DebugForm'>
            <div className='messages'>
                <div className='title'>Сообщения</div>
                <input ref={name} className='name' placeholder='Имя' value='Test'></input>
                <textarea ref={text}></textarea>
                <button onClick={send}>Отправить</button>
            </div>
        </Form>
    );
};

export default DebugForm;
