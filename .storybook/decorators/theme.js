import React from "react";
import { addDecorator } from "@storybook/react";
import { select, color, text } from '@storybook/addon-knobs';

import '@Yandex.Dj/service-common/scss/root.scss';

export default {
    order: 1,
    add: () => addDecorator((story) => {
        return (
            <div className={`theme`}>
                {story()}
            </div>
        )
    })
}