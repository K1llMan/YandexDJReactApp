import { connect } from 'react-redux';
import SchemeForm from "../forms/SchemeForm";

const mapStateToProps = (state: any, props: any) => {
    return {
        schemes: state.schemes,
        scheme: state.scheme
    };
};

export const SchemeFormContainer = connect(
    mapStateToProps, {  }
)(SchemeForm);