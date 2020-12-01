import React, { Component } from 'react';
import { Route , Switch } from 'react-router';

import { Home } from './Home';

import AuthorizeRoute from './api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Route>
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />     
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Switch>
            </React.Fragment>

        </Route>
    );
  }
}
