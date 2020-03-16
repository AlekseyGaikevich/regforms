import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from './Registration';
import {setEmailText, setPasswordText, setRepeatPasswordText} from '../store/registration/actions';

class RegistrationContainer extends Component {
    render() {
        return <Registration
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}
            setRepeatPasswordText={this.props.setRepeatPasswordText}
            email={this.props.email}
            password={this.props.password}
            repeatPassword={this.props.repeatPassword}
        />
    };
};

const mapStateToProps = state => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword
    }
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText,
    setRepeatPasswordText
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);