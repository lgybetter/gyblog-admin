import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../reducers/state';
import { login } from '..//../actions';
import { autobind } from 'core-decorators';
import './App.css';

const logo = require('./logo.svg');

interface AppState {
  userToken: string;
}

interface AppProps {
  token: string;
  dispatch: Dispatch<{}>;
}

const mapStateToProps = (state: IState) => {
  return {
    token: state.admin.token
  };
};

@(connect(mapStateToProps) as any)
@autobind
class App extends React.Component<AppProps, AppState> {
  constructor () {
    super();
    this.state = {
      userToken: 'lgy'
    };
  }

  handlerClick () {
    this.props.dispatch(login({
      token: 'lgylgy',
      user: {
        name: 'lgt',
        email: '434334234@qq.com'
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.handlerClick}>Test</button>
        <h1>{this.props.token} laalalal</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default App;
export default connect(mapStateToProps)(App);
