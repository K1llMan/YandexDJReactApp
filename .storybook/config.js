import { configure, addDecorator, setAddon } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";

import * as Decorators from './decorators';

withOptions({
    url: "#",
    name: "Тест компонентов и форм",
    addonPanelInRight: true,
    hierarchySeparator: /\//
});

addDecorator(withKnobs);

// Применение декораторов
Object.keys(Decorators)
    .map(k => Decorators[k])
    .sort((a, b) => a.order - b.order)
    .forEach(d => d.add());

configure(() => {
    require("../stories/index.tsx");
}, module);
