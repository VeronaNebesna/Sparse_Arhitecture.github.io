import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom"
import App from './App';
import ScrollToTop from "./ScrollToTop"
// import {Provider} from "react-redux"
// import { createStore } from 'redux';
// import rootReducers from './App/store/rootReducer';

// const store = createStore(
//   rootReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
//   )

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <HashRouter>
        <ScrollToTop/>
          <App />
      </HashRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

