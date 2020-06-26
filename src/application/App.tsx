import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { API, MusicPlayerStore, MusicPlayerForm } from '@Yandex.DJ/service-common';
import { API as WidgetsAPI, WidgetsStore, WidgetsForm } from '@Yandex.DJ/stream-widgets';

// Список компонентов и путей
let routes = [
    {
        path: '/', component: () => {
            API.getPlaylists();

            return (<Provider store={MusicPlayerStore}>
                <MusicPlayerForm />
            </Provider>)
        }
    },
    {
        path: '/stream', component: () => {
            WidgetsAPI.getSchema();

            return (<Provider store={WidgetsStore}>
                <WidgetsForm />
            </Provider>)
        }
    },
]

export default () => (
    <BrowserRouter>
        <Switch>
            {
                routes.map((el: any, i: number) => <Route exact path={el.path} component={el.component} />)
            }
        </Switch>
    </BrowserRouter>
);