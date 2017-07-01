import { createAction } from 'redux-actions';
import { IAdmin } from '../models/admin';

const login = createAction<IAdmin, IAdmin>('login', (payload: IAdmin) => {
  return {
    token: payload.token,
    user: {
      name: payload.user.name,
      email: payload.user.email
    }
  };
});

export {
  login
};