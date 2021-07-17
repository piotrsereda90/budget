import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import rootReducer from 'data/reducers';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { applyMiddleware, createStore, compose } from 'redux';
// import thunk from 'redux-thunk';
// import loggerMiddleware from './middleware/logger';
// import monitorReducerEnhancer from './enhancers/monitorReducer';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware =[thunk];

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middleware)))
import store from './data/store';

  ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
