import { connect } from 'react-redux';
import WidgetsForm from "../forms/WidgetsForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        currentSong: state.currentSong
    };
};

export const WidgetsFormContainer = connect(
    mapStateToProps, {  }
)(WidgetsForm);