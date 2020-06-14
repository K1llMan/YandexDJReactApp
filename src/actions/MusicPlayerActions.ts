import MusicPlayerStore, { actionTypes } from '../store/MusicPlayerStore';

import { action } from './common';

export function initPlaylists(path: string, value: any) {
    action(MusicPlayerStore, actionTypes[0], path, value);
}