import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './gql';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
