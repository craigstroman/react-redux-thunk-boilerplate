import axios from 'axios';
import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { data },
});

export const fetchPostsError = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
});

export function fetchPosts() {
  const url = 'http://localhost:3000/posts';

  return (dispatch) => {
    dispatch(fetchPostsBegin());
    axios.get(url)
      .then((res) => {
        if (res.data.length) {
          dispatch(fetchPostsSuccess(res.data));
          return res.data;
        }
        dispatch(fetchPostsError('Posts not available.'));
        return 0;
      })
      .catch(err => dispatch(fetchPostsError(err)));
  };
}
