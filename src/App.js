import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './scss/app.scss';
import AuthContainer from './components/AuthContainer';
import RegistrationContainer from './components/RegistrationContainer';
import rootReducer from './store/reducers';

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app--wrapper">
          <h1>Complex State</h1>

          <div className="forms">
            <AuthContainer />
            <div className="line-between"></div>
            <RegistrationContainer />
          </div>
        </div>
      </Provider>
    );
  };
};
