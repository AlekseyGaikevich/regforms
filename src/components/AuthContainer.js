import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setEmailText, setPasswordText} from '../store/auth/actions';

class AuthContainer extends Component {
    render() {
        return <Auth
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}
            email={this.props.email}
            password={this.props.password}
        />
    };
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
