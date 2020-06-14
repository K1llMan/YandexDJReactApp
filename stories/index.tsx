import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Provider } from 'react-redux';
import MusicPlayerStore from '../src/store/MusicPlayerStore';

import { MusicPlayer } from '../src/components';
import { playlists } from '../stories/playlists';

storiesOf('Components', module)
    .add('Player', () =>
        <Provider store={MusicPlayerStore}>
            <MusicPlayer playlist={playlists[1]} />
        </Provider>)