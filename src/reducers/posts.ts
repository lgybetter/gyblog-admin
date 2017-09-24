import { IPost, IPosts } from '../models/post';
import { handleActions, Action } from 'redux-actions';

export interface IPostState {
  post: IPost,
  posts: IPosts
}

const postState: IPostState = {
  post: {
    title: 'init',
    subTitle: 'init',
    image: '',
    created: 0
  },
  posts: {
    totalCount: 0,
    list: []
  }
}

const actions = {
  getPost: (state: IPostState, action: Action<IPost>): IPostState => {
    return Object.assign(state, { post: action.payload })
  },
  getPosts: (state: IPostState, action: Action<IPosts>): IPostState => {
    return Object.assign(state, { posts: action.payload })
  }
}

export default handleActions<IPostState>(actions, postState)
