import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promiseMiddleware from 'redux-promise';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { Route, Redirect } from 'react-router-dom';
import App from './containers/App/App';
import Login from './containers/Login/Login';
// import { IAdmin } from './models/admin'

import './index.css';

const store = createStore(reducer, applyMiddleware(promiseMiddleware));
// const user: IAdmin = JSON.parse(localStorage.getItem('user')) || { token: 'lgy'};
const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <div className="main">
        <Route exact path="/" render={() => 
          (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token) ? (
            <Route component={App} />
          ) : (
            <Redirect to="/login"/>
          )
        }/>
        <Route exact path="/login" render={() => 
          (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token) ? (
            <Redirect to="/"/>
          ) : (
            <Route component={Login} />
          )
        }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
