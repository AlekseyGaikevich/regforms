import React, { Component } from 'react';
import '../scss/form.scss';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
    };

    onEmailChange(event) {
        this.props.setEmailText(event.target.value)
    };
    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    };
    onPasswordRepeatChange(event) {
        this.props.setRepeatPasswordText(event.target.value)
    };

    render() {
        return (
            <div className="registration">
                <h3>Sign Up</h3>
                <form>
                    <div>
                        <input type="text"
                            name="login"
                            autoComplete="false"
                            placeholder="Email"
                            spellCheck={false}
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Repeat password"
                            value={this.props.repeatPassword}
                            onChange={this.onPasswordRepeatChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    };
};
