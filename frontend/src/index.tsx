import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { store } from './store'
import httpCfg from './config/http';
import './index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: httpCfg.backendURL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)