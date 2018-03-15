import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { user } from './components/reducers';

const reducer = combineReducers({
  user
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(
//       thunk
//     )
//   )
// );
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;