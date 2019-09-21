import axios from 'axios';
import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: { data },
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export function fetchUsers() {
  const url = 'http://localhost:3000/users';

  return (dispatch) => {
    dispatch(fetchUsersBegin());
    axios.get(url)
      .then((res) => {
        if (res.data.length) {
          dispatch(fetchUsersSuccess(res.data));
          return res.data;
        }
        dispatch(fetchUsersError('Users not available.'));
        return 0;
      })
      .catch(err => dispatch(fetchUsersError(err)));
  };
}
