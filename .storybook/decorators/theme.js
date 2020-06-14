import React from "react";
import { addDecorator } from "@storybook/react";
import { select, color, text } from '@storybook/addon-knobs';

//import '../../packages/etl-manager-common/src/css/themes.scss';

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