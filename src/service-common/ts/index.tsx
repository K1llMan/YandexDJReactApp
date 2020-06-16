import MusicPlayerStore from './store/MusicPlayerStore';

import { API } from './API/API';

import MusicPlayer from './components/MusicPlayer';
import PlaylistRecord from './components/PlaylistRecord';

import Form from './compound-components/Form';
import Playlist from './compound-components/Playlist';
import PlaylistCover from './compound-components/PlaylistCover';
import PlaylistsContainer from './compound-components/PlaylistsContainer';

import { MusicPlayerFormContainer as MusicPlayerForm } from './containers/MusicPlayerFormContainer';

export { 
    MusicPlayerStore, API, 
    
    MusicPlayer, PlaylistRecord, 
    
    Form, Playlist, PlaylistCover, PlaylistsContainer,

    MusicPlayerForm
}