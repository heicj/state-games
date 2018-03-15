import { user, USER } from './reducers';

it('user starts as null', () => {
  const state = user(undefined, {});
  expect(state).toBe(null);
});

it('adds a user', () => {
  const state = user(undefined, { type: USER, payload: 'Charlie' });
  expect(state).toBe('Charlie');
});