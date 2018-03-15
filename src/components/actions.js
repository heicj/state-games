import { USER } from './reducers';

export function addUser(user){
  return {
    type: USER,
    payload: user
  };
}