import { handleActions, Action } from 'redux-actions';
import { IAdmin } from '../models/admin';

const initialState: IAdmin = {
  token: 'admin',
  name: '',
  email: ''
};

const actions = {
  login: (state: IAdmin, action: Action<IAdmin>): IAdmin => {
    return {
      token: action.payload.token,
      name: action.payload.name,
      email: action.payload.email
    };
  }
};

export default handleActions<IAdmin>(actions, initialState);