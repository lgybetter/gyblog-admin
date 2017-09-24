import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promiseMiddleware from 'redux-promise';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import './index.css';
const store = createStore(reducer, applyMiddleware(promiseMiddleware));
const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route path="/" render={props => (
        <App {...props} />
      )}/>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
