import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
interface AppProps extends RouteComponentProps<App> {
}

class App extends React.Component<AppProps> {
  render () {
    return (
      <div className="main">
        <Route path="/" render={() => (
          (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token) ? (
            <Route component={Home} />
          ) : (
            <Redirect to="login"/>
          )
        )}/>
        <Route exact path="/login" render={() => 
          (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token) ? (
            <Redirect to="/"/>
          ) : (
            <Route component={Login} />
          )
        }/>
      </div>
    )
  }
}

export default App