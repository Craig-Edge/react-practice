import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const middleware = [logger];
const store = configureStore({reducer: rootReducer, middleware});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
