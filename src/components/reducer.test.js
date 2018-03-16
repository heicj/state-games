import { user, USER, CLEAR_USER } from './reducers';

it('user starts as null', () => {
  const state = user(undefined, {});
  expect(state).toBe(null);
});

it('adds a user', () => {
  const state = user(undefined, { type: USER, payload: 'Charlie' });
  expect(state).toBe('Charlie');
});

it('sets user state back to null', () => {
  const state = user('Charlie', { type: CLEAR_USER });
  expect(state).toBe(null);
})