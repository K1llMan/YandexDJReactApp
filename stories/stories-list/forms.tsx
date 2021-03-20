import React from 'react';
import { storiesOf } from '@storybook/react';

import { API, MusicPlayerStore, MusicPlayerForm, TabsForm } from '@Yandex.Dj/service-common';
import { API as WidgetsAPI, WidgetsStore, WidgetsForm } from '@Yandex.Dj/stream-widgets';

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
            .add('TabsForm', () => {
                API.getPlaylists();
                API.getSchemes();
                API.getTracks();

                return (
                    <Provider store={MusicPlayerStore}>
                        <TabsForm />
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