import { combineReducers } from 'redux';
import postsReducer from './containers/Posts/reducers';
import postReducer from './containers/Post/reducers';
import usersReducer from './containers/Users/reducers';
import userReducer from './containers/User/reducers';

const rootReducer = combineReducers({
  postsReducer,
  postReducer,
  usersReducer,
  userReducer,
});

export default rootReducer;
