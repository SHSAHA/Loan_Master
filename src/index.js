import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import balanceReducer from './store/balanceReducer'
import loanReducer from './store/loanReducer'
import  thunk  from 'redux-thunk'

const reducer = combineReducers({
  balance: balanceReducer,
  loan: loanReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

