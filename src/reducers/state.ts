import { IAdmin } from '../models/admin'
import { IPostState } from './posts'

export interface IState {
  adminState: IAdmin,
  postState: IPostState
}