import MusicPlayerStore from './store/MusicPlayerStore';

import { API } from './API/API';

import MusicPlayer from './components/MusicPlayer';
import PlaylistCover from './components/PlaylistCover';
import PlaylistRecord from './components/PlaylistRecord';
import SchemeRecord from './components/SchemeRecord';
import WidgetRecord from './components/WidgetRecord';

import Form from './compound-components/Form';
import Playlist from './compound-components/Playlist';
import PlaylistsGroup from './compound-components/PlaylistsGroup';
import PlaylistsContainer from './compound-components/PlaylistsContainer';
import SchemesList from './compound-components/SchemesList';
import WidgetsList from './compound-components/WidgetsList';

import TabsForm from './forms/TabsForm';

import { MusicPlayerFormContainer as MusicPlayerForm } from './containers/MusicPlayerFormContainer';
import { SchemeFormContainer as SchemeForm } from './containers/SchemeFormContainer';
import { RocksmithFormContainer as RocksmithForm } from './containers/RocksmithFormContainer';
import DebugForm from './forms/DebugForm';

export { 
    MusicPlayerStore, API, 
    
    MusicPlayer, PlaylistRecord, SchemeRecord, WidgetRecord,
    
    Form, Playlist, PlaylistCover, PlaylistsGroup, PlaylistsContainer, SchemesList, WidgetsList,

    MusicPlayerForm, SchemeForm, RocksmithForm, DebugForm, TabsForm
}