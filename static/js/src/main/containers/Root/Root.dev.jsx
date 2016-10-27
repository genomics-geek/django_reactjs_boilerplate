import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from '../DevTools';
import routes from '../../routes';


const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};


export default Root;
