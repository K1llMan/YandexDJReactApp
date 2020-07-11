import MusicPlayerStore from './store/MusicPlayerStore';

import { API } from './API/API';

import MusicPlayer from './components/MusicPlayer';
import PlaylistCover from './components/PlaylistCover';
import PlaylistRecord from './components/PlaylistRecord';
import SchemeRecord from './components/SchemeRecord';

import Form from './compound-components/Form';
import Playlist from './compound-components/Playlist';
import PlaylistsGroup from './compound-components/PlaylistsGroup';
import PlaylistsContainer from './compound-components/PlaylistsContainer';
import SchemesList from './compound-components/SchemesList';

import TabsForm from './forms/TabsForm';

import { MusicPlayerFormContainer as MusicPlayerForm } from './containers/MusicPlayerFormContainer';
import { SchemeFormContainer as SchemeForm } from './containers/SchemeFormContainer';

export { 
    MusicPlayerStore, API, 
    
    MusicPlayer, PlaylistRecord, SchemeRecord,
    
    Form, Playlist, PlaylistCover, PlaylistsGroup, PlaylistsContainer, SchemesList,

    MusicPlayerForm, SchemeForm, TabsForm
}