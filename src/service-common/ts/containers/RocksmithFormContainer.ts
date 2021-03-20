import { connect } from 'react-redux';
import RocksmithForm from "../forms/RocksmithForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        tracks: state.rocksmith.tracks
    };
};

export const RocksmithFormContainer = connect(
    mapStateToProps, {  }
)(RocksmithForm);