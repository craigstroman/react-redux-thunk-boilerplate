import axios from 'axios';
import { FETCH_POST_BEGIN, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './constants';

export const fetchPostBegin = () => ({
  type: FETCH_POST_BEGIN,
});

export const fetchPostSuccess = data => ({
  type: FETCH_POST_SUCCESS,
  payload: { data },
});

export const fetchPostError = error => ({
  type: FETCH_POST_FAILURE,
  payload: { error },
});

export function fetchPost(id) {
  const url = `http://localhost:3000/posts/${id}`;

  return (dispatch) => {
    dispatch(fetchPostBegin());
    axios.get(url)
      .then((res) => {
        if (typeof res === 'object') {
          dispatch(fetchPostSuccess(res));
          return res;
        }
        dispatch(fetchPostError('Post not available.'));
        return 0;
      })
      .catch(err => dispatch(fetchPostError(err)));
  };
}
