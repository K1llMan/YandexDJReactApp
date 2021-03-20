import { API } from './API/API';

import WidgetsStore from './store/WidgetsStore';

import Widget from './components/Widget';
import SongWidget from './components/SongWidget';
import SoundPlayerWidget from './components/SoundPlayerWidget';
import RocksmithWidget from './components/RocksmithWidget';

import WidgetsContainer from './compound-components/WidgetsContainer';

import { IRocksmithTrack } from './interfaces/interfaces';
import { RocksmithTrackArrangement } from './enums/enums';
import { WidgetsFormContainer } from './containers/WidgetsFormContainer';

export {
    API,

    WidgetsStore,

    Widget, SongWidget, SoundPlayerWidget, RocksmithWidget,

    WidgetsContainer,

    RocksmithTrackArrangement,

    WidgetsFormContainer as WidgetsForm
}

export type { IRocksmithTrack }