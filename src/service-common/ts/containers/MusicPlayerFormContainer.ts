import { connect } from 'react-redux';
import MusicPlayerForm from "../forms/MusicPlayerForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        playlists: state.playlists,
        currentPlaylist: state.currentPlaylist
    };
};

export const MusicPlayerFormContainer = connect(
    mapStateToProps, {  }
)(MusicPlayerForm);