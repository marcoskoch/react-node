import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Apartments from '../pages/Apartments';
import Apartment from '../pages/Apartment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/apartments" component={Apartments} isPrivate />
      <Route path="/apartment" component={Apartment} isPrivate />
    </Switch>
  );
}
