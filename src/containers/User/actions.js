import axios from 'axios';
import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './constants';

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  payload: { data },
});

export const fetchUserError = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
});

export function fetchUser(id) {
  const url = `http://localhost:3000/users/${id}`;

  return (dispatch) => {
    dispatch(fetchUserBegin());
    axios.get(url)
      .then((res) => {
        if (typeof res.data === 'object') {
          dispatch(fetchUserSuccess(res.data));
          return res.data;
        }
        dispatch(fetchUserError('User not available.'));
        return 0;
      })
      .catch(err => dispatch(fetchUserError(err)));
  };
}
