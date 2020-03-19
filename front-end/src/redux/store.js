import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import jwtDecode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const checkTokenExpirationMiddleware = () => next => action => {
  const token = localStorage.getItem("token");
  if (jwtDecode(token).exp < Date.now() / 1000) {
    next(action);
    localStorage.clear();
  }
  next(action);
};


const searchStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware, checkTokenExpirationMiddleware)
  )
);

export default searchStore;
