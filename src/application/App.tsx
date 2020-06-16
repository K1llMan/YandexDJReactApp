import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { API, MusicPlayerStore, MusicPlayerForm, Form } from '@Yandex.DJ/service-common';
import { WidgetsStore, WidgetsForm } from '@Yandex.DJ/stream-widgets';

/*
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
*/

/*
        
    <React.Fragment>
        <div className='top'></div>
        
        <Provider store={MusicPlayerStore}>
            <MusicPlayerForm />
        </Provider>

        <div className='bottom'></div>
    </React.Fragment>
*/

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
        path: '/stream', component: () =>
            <Provider store={WidgetsStore}>
                <WidgetsForm />
            </Provider>
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