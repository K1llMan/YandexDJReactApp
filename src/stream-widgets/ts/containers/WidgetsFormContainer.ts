import { connect } from 'react-redux';
import WidgetsForm from "../forms/WidgetsForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        scheme: state.scheme,
        currentSong: state.currentSong,
        sound: state.sound
    };
};

export const WidgetsFormContainer = connect(
    mapStateToProps, {  }
)(WidgetsForm);