import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { login } from  '../../actions';
import { RouteComponentProps } from 'react-router';
import { autobind } from 'core-decorators';
import './Login.css';

interface LoginState {
  account: string,
  password: string
}

interface LoginProps extends RouteComponentProps<Login> {
  dispatch: Dispatch<{}>;
}

@(connect() as any)
@autobind
class Login extends React.Component<LoginProps, LoginState> {
  constructor () {
    super();
    this.state = {
      account: '',
      password: ''
    };
  }
  
  accountChange (event: any) {
    this.setState({
      account: event.target.value
    });
  }

  passwordChange (event: any) {
    this.setState({
      password: event.target.value
    });
  }

  loginHandler () {
    if (this.state.account && this.state.password) {
      this.props.dispatch(login({
        account: this.state.account,
        password: this.state.password
      }))
    } else {
      window.alert('please input the account or password')
    }
  }

  render () {
    return (
      <div className="p-login">
        <div className="w-login-form">
          <h3>GyBlog Admin</h3>
          <h5>account</h5>
          <input type="text" onChange={this.accountChange}/>
          <h5>password</h5>
          <input type="password" onChange={this.passwordChange}/>
          <button type="button" onClick={this.loginHandler}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;