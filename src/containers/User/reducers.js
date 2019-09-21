import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './constants';

const userInitialState = {
  user: null,
  loading: true,
  error: null,
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.data,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
