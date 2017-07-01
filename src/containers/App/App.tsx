import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../reducers/state';
import './App.css';

const logo = require('./logo.svg');

interface AppState {
  userToken: string;
}

interface AppProps {
  token: string;
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.props.token} laalalal</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    token: state.admin.token
  };
};

export default connect(mapStateToProps)(App);
