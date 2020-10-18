import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//react router
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import {store, persistor} from './redux/Store';

//redux persist
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
