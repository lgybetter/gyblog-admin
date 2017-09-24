import { combineReducers } from 'redux';
import adminState from './admin';
import postState from './posts'

const rootReducer = combineReducers({
  postState,
  adminState
});

export default rootReducer;