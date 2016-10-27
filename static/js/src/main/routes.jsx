import React from 'react';
import { Route } from 'react-router';

import HelloWorld from './components/hello-world';


const routes = (
  <Route path="/" component={HelloWorld} />
);


export default routes;
