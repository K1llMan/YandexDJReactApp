import { API } from './API/API';

import WidgetsStore from './store/WidgetsStore';

import Widget from './components/Widget';
import SongWidget from './components/SongWidget';
import SoundPlayerWidget from './components/SoundPlayerWidget';

import WidgetsContainer from './compound-components/WidgetsContainer';

import { WidgetsFormContainer } from './containers/WidgetsFormContainer';

export {
    API,

    WidgetsStore,

    Widget, SongWidget, SoundPlayerWidget,

    WidgetsContainer,

    WidgetsFormContainer as WidgetsForm
}