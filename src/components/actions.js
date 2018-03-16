import { auth } from '../services/firebase';
import { USER, CLEAR_USER } from './reducers';

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

export function clearUser(){
  return {
    type: CLEAR_USER,
  };
}

export function logOut() {
  return auth.signOut();
}