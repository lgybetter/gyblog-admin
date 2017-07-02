import { createAction } from 'redux-actions';
import { IAdmin, ILogin } from '../models/admin';

const login = createAction<IAdmin, ILogin>('login', (payload: ILogin) => {
  console.log(payload.account);
  console.log(payload.password);
  //发送请求
  return {
    token: '1234',
    user: {
      name: 'lgy',
      email: '123'
    }
  };
});

export {
  login
};