import React from 'react';
import { storiesOf } from '@storybook/react';

import { PlaylistCover, PlaylistsGroup, PlaylistsContainer } from '@Yandex.Dj/service-common';
import { WidgetsContainer } from '@Yandex.DJ/stream-widgets';

import { groups } from '../playlists';

export default {
    order: 1,
    add: () => {
        storiesOf('Compound components', module)
            .add('PlaylistCover', () =>
                <PlaylistCover
                    playlist={groups[1].playlists[1]}
                />
            )
            .add('PlaylistGroup', () =>
                <PlaylistsGroup
                    type={groups[0].group}
                    playlists={groups[0].playlists}
                    onOpenPlaylist={() => new Promise(() => {})}
                />
            )            
            .add('PlaylistsContainer', () =>
                <PlaylistsContainer
                    groups={groups}
                    playlist={groups[0].playlists[0]}
                    onOpenPlaylist={() => new Promise(() => {})}
                />
            )
            .add('WidgetsContainer', () =>
                <WidgetsContainer>
                    <div>Содержимое контейнера</div>
                </WidgetsContainer>
            )            
    }
}