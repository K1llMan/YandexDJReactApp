import React from 'react';
import { storiesOf } from '@storybook/react';

import { API, MusicPlayerStore, MusicPlayerForm } from '@Yandex.Dj/service-common';
import { WidgetsStore, WidgetsForm } from '@Yandex.Dj/stream-widgets';

import { Provider } from 'react-redux';

export default {
    order: 2,
    add: () => {
        storiesOf('Forms', module)
            .add('MusicPlayerForm', () => {
                API.getPlaylists();

                return (
                    <Provider store={MusicPlayerStore}>
                        <MusicPlayerForm />
                    </Provider>
                )
            })
            .add('WidgetsContainer', () => {
                return (
                    <Provider store={WidgetsStore}>
                        <WidgetsForm />
                    </Provider>
                )
            })
    }
}