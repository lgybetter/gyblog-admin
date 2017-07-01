import { handleActions, Action } from 'redux-actions';
import { IAdmin } from '../models/admin';

const initialState: IAdmin = {
  token: 'admin',
  user: {
    name: '',
    email: ''
  }
};

const actions = {
  login: (state: IAdmin, action: Action<IAdmin>): IAdmin => {
    return {
      token: action.payload.token,
      user: {
        name: action.payload.user.name,
        email: action.payload.user.email
      }
    };
  }
};

export default handleActions<IAdmin>(actions, initialState);