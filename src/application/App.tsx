import React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import MusicPlayer from '../components/MusicPlayer';
import Counter from '../components/Counter';

/*
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
*/

export default () => (
    <React.Fragment>
        <div className='top'></div>
        <MusicPlayer/>
        <div className='bottom'></div>
    </React.Fragment>
);