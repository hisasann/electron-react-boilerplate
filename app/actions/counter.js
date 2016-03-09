import { CALL_API } from '../api/sample-api.js';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

// ajax
function fetchUser() {
  return {
    [CALL_API]: {
      types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE]
    }
  };
}

export function loadUser() {
  console.log('action/counter loadUser');

  // ajax処理を想定
  return (dispatch) => {
    return dispatch(fetchUser());
  };
}
