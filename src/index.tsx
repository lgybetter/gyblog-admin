import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { Route, Redirect } from 'react-router-dom';
import App from './containers/App/App';
import Login from './containers/Login/Login';

import './index.css';

const initialState = {};
const store = createStore(reducer, initialState);
const loginFlag: string = sessionStorage.getItem('token');

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <div className="main">
        <Route exact path="/" render={() => (
          loginFlag ? (
            <Route component={App} />
          ) : (
            <Redirect to="/login"/>
          )
        )}/>
        <Route exact path="/login" component={Login}/>
    </div>
    </Provider>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
