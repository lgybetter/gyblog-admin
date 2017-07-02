import { handleActions, Action } from 'redux-actions';
import { IAdmin } from '../models/admin';

const initialState: IAdmin = JSON.parse(localStorage.getItem('user')) || {
  token: '',
  name: '',
  email: ''
};

const actions = {
  login: (state: IAdmin, action: Action<IAdmin>): IAdmin => {
    localStorage.setItem('user', JSON.stringify(action.payload))
    return {
      token: action.payload.token,
      name: action.payload.name,
      email: action.payload.email
    };
  }
};

export default handleActions<IAdmin>(actions, initialState);