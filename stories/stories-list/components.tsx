import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from "@storybook/addon-knobs";

import { MusicPlayer, PlaylistRecord } from '@Yandex.Dj/service-common';
import { Widget, SongWidget, SoundPlayerWidget } from '@Yandex.Dj/stream-widgets';

import { groups } from '../playlists';

export default {
    order: 0,
    add: () => {
        storiesOf('Components', module)
            .add('MusicPlayer', () =>
                <MusicPlayer
                    tracks={groups[1].playlists[0].tracks}
                />
            )
            .add('PlaylistRecord', () =>
                <PlaylistRecord
                    track={groups[1].playlists[0].tracks[0]}
                />
            )
            .add('Widget', () => {
                let size = {
                    width: 10,
                    height: 10
                }

                let changed = false;

                return (<div style={{ width: `1000px`, height: `500px` }}>
                    <Widget
                        x={10}
                        y={10}
                        width={size.width}
                        height={size.height}
                        onResize={(w, h) => {
                            boolean('Changed', !changed)

                            size.width = w;
                            size.height = h;
                        }}
                    />
                </div>)
            })
            .add('SongWidget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <SongWidget
                        x={10}
                        y={10}
                        width={10}
                        height={10}
                        song='Test'
                    />
                </div>
            )
            .add('SoundPlayerWidget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <SoundPlayerWidget
                        x={10}
                        y={10}
                        width={30}
                        height={10}
                        sound='api/content/speech?id=qjqrrr1x.i0z'
                    />
                </div>
            )
    }
}