import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';

import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import HomePage from './layout/HomePage';
import FavesPage from './layout/FavesPage';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path='/'>
          <RouterPage
            pageComponent={<HomePage />}
            path='/'
          ></RouterPage>
          <RouterPage
            pageComponent={<FavesPage />}
            path='/faves'
          ></RouterPage>
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
