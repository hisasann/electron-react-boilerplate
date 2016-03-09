import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions/counter';

export default function request(state = {
  isFetching: false,
  loadingLabel: '..loading'
}, action = () => {}) {
  console.log('ajax reducer: ', action.type, action.message);

  switch (action.type) {
    case USER_REQUEST:
      return {
        isFetching: true,
        loadingLabel: '..loading'
      };
    case USER_SUCCESS:
      return {
        isFetching: false,
        loadingLabel: 'loading done'
      };
    case USER_FAILURE:
      return {
        isFetching: false,
        loadingLabel: '..loading failed'
      };
    default:
      return state;
  }
}
