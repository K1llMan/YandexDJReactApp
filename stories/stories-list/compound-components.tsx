import React from 'react';
import { storiesOf } from '@storybook/react';

import { PlaylistCover, PlaylistsContainer } from '@Yandex.Dj/service-common';
import { WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { playlists } from '../playlists';

export default {
    order: 1,
    add: () => {
        storiesOf('Compound components', module)
            .add('PlaylistCover', () =>
                <PlaylistCover
                    playlist={playlists[1]}
                />
            )
            .add('PlaylistsContainer', () =>
                <PlaylistsContainer
                    playlists={playlists}
                />
            )
            .add('WidgetsContainer', () =>
                <WidgetsContainer>
                    <div>Содержимое контейнера</div>
                </WidgetsContainer>
            )            
    }
}