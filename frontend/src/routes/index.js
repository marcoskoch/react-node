import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Apartments from '../pages/Apartments';
import Apartment from '../pages/Apartment';
import ApartmentEdit from '../pages/ApartmentEdit';

import Residents from '../pages/Residents';
import Resident from '../pages/Resident';
import ResidentEdit from '../pages/ResidentEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/apartments" component={Apartments} isPrivate />
      <Route path="/apartment" component={Apartment} isPrivate />
      <Route path="/apartment-edit/:id" component={ApartmentEdit} isPrivate />

      <Route path="/residents/:id" component={Residents} isPrivate />
      <Route path="/resident/:id" component={Resident} isPrivate />
      <Route path="/resident-edit/:id" component={ResidentEdit} isPrivate />
    </Switch>
  );
}
