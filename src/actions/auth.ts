import { createAction } from 'redux-actions'
import { IAdmin, ILogin } from '../models/admin'
import { request } from './request'

const login = createAction<Promise<IAdmin>, ILogin>('login', async (payload: ILogin) => {
  await request({
    url: '/signIn',
    method: 'post',
    data: {
      email: payload.account,
      password: payload.password
    }
  })
  return {
    token: 'token',
    name: 'lgybetter',
    email: '437675103@qq.com'
  }
})

export {
  login
}