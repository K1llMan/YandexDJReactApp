import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from "@storybook/addon-knobs";

import { MusicPlayer, PlaylistRecord } from '@Yandex.Dj/service-common';
import { Widget, SongWidget, SoundPlayerWidget, RocksmithWidget } from '@Yandex.Dj/stream-widgets';

import { groups } from '../playlists';
import { RocksmithTrackArrangement } from '@Yandex.DJ/stream-widgets/ts/enums/RocksmithTrackArrangement';

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
                        order={0}
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
                        order={0}
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
                        order={0}
                    />
                </div>
            )
            .add('RocksmithWidget', () =>
                <div style={{ width: `1000px`, height: `500px` }}>
                    <RocksmithWidget
                        x={10}
                        y={10}
                        width={300}
                        height={100}
                        tracks={[
                            {
                                artist: "Old Gods of Asgard (Poets of the Fall)",
                                name: "Zhenschina ya ne tantsuyu (A-Dessa cover) | Женщина я не танцую (A-Dessa cover)",
                                user: "Useruseruser",
                                arrangementType: 'Rhythm',
                            },
                            {
                                artist: "Test",
                                name: "Test testov",
                                user: "Test",
                                arrangementType: 'Bass',
                            },
                        ]}
                        maxCount={5}
                        order={0}
                    />
                </div>
            )            
    }
}