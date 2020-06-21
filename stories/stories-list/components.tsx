import React from 'react';
import { storiesOf } from '@storybook/react';

import { MusicPlayer, PlaylistRecord } from '@Yandex.Dj/service-common';
import { Widget, SongWidget, SoundPlayerWidget } from '@Yandex.Dj/stream-widgets';

import { playlists } from '../playlists';

export default {
    order: 0,
    add: () => {
        storiesOf('Components', module)
            .add('MusicPlayer', () =>
                <MusicPlayer
                    playlist={null}
                />
            )
            .add('PlaylistRecord', () =>
                <PlaylistRecord
                    track={playlists[1].tracks[0]}
                />
            )
            .add('Widget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <Widget
                        left={10}
                        top={10}
                        width={10}
                        height={10}
                    />
                </div>
            )
            .add('SongWidget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <SongWidget
                        left={10}
                        top={10}
                        width={10}
                        height={10}
                        song='Test'
                    />
                </div>
            )
            .add('SoundPlayerWidget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <SoundPlayerWidget
                        left={10}
                        top={10}
                        width={30}
                        height={10}
                        speech='api/content/speech?id=qjqrrr1x.i0z'
                    />
                </div>
            )             
    }
}