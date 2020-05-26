import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {postStore} from "./store/postStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import {bookmarkStore} from "./store/bookmarkStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookmarkStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
