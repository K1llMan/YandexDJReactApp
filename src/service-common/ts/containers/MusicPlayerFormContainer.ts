import { connect } from 'react-redux';
import MusicPlayerForm from "../forms/MusicPlayerForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        groups: state.groups,
        playlist: state.playlist,
        currentPlaylist: state.currentPlaylist
    };
};

export const MusicPlayerFormContainer = connect(
    mapStateToProps, {  }
)(MusicPlayerForm);