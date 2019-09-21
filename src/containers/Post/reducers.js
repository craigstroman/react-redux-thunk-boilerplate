import { FETCH_POST_BEGIN, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './constants';

const postInitialState = {
  post: null,
  loading: true,
  error: null,
};

export default function postReducer(state = postInitialState, action) {
  switch (action.type) {
    case FETCH_POST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload.data,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
