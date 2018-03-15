import { auth } from '../services/firebase';
import { USER } from './reducers';

export function listenForUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: USER,
        payload: user
      });
    });
  };
}

export function addUser(user){
  return {
    type: USER,
    payload: user
  };
}