export interface IAdmin {
  token: string,
  user: {
    name: string,
    email: string
  }
}

export interface ILogin {
  account: string,
  password: string
}