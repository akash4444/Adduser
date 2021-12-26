import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux'
import store from "./createStore";
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

