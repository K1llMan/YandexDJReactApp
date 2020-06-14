import { addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';

export default {
    order: 0,
    add: () => addDecorator(withInfo)
}