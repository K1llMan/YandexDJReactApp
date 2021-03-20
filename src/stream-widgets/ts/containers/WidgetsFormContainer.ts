import { connect } from 'react-redux';
import WidgetsForm from "../forms/WidgetsForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        scheme: state.scheme,
        currentSong: state.currentSong,
        sound: state.sound,
        tracks: state.rocksmith.tracks
    };
};

export const WidgetsFormContainer = connect(
    mapStateToProps, {  }
)(WidgetsForm);