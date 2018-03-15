export const USER = 'USER';

export function user(state = ['hello'], { type, payload }){
  switch (type){
    case USER:
      return payload;
    default:
      return state;
  }
}