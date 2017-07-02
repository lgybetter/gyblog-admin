import { createAction } from 'redux-actions';
import { IAdmin, ILogin } from '../models/admin';
import axios from 'axios';

const login = createAction<Promise<IAdmin>, ILogin>('login', async (payload: ILogin) => {
  const res = await axios.get('http://localhost:3001/api/user', {
    params: {
      email: payload.account,
      password: payload.password
    }
  });
  console.log(res);
  return {
    token: res.data.token,
    name: res.data.name,
    email: res.data.email
  };
});

export {
  login
};