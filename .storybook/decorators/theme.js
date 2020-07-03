import React from "react";
import { addDecorator } from "@storybook/react";

import '../css/themes.css';
import '@Yandex.Dj/service-common/scss/root.scss';

export default {
    order: 1,
    add: () => addDecorator((story) => {
        return (
            <div style={{ overflow: 'hidden' }}>
                {story()}
            </div>
        )
    })
}