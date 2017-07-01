import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route>
        <Route path="/" component={App}/>
      </Route>
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
