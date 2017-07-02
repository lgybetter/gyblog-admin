import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { login } from  '../../actions';
import { RouteComponentProps } from 'react-router';
import { autobind } from 'core-decorators';
import { IState } from '../../reducers/state';
import { withRouter } from 'react-router';
import './Login.css';
// import { IAdmin } from '../../models/admin';

interface LoginState {
  account: string,
  password: string
}

interface LoginProps extends RouteComponentProps<Login> {
  token: string;
  dispatch: Dispatch<{}>;
}

const mapStateToProps = (state: IState) => {
  return {
    token: state.admin.token
  };
};

@(connect(mapStateToProps) as any)
@(withRouter as any)
@autobind
class Login extends React.Component<LoginProps, LoginState> {
  constructor () {
    super();
    this.state = {
      account: '',
      password: ''
    };
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.token) {
      this.props.history.replace('/');
    }
  }
  
  private accountChange (event: any) {
    this.setState({
      account: event.target.value
    });
  }

  private passwordChange (event: any) {
    this.setState({
      password: event.target.value
    });
  }

  private loginHandler () {
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
          <h2>GyBlog Admin</h2>
          <h4>account</h4>
          <input type="text" onChange={this.accountChange}/>
          <h4>password</h4>
          <input type="password" onChange={this.passwordChange}/>
          <button type="button" onClick={this.loginHandler}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;