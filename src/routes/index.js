import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from '../views/App';
import Dashboard from '../views/Dashboard';
import Settions from '../views/Settions';
import Categories from '../views/Categories';

import Header from '../components/Header';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <App>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/settions" component={Settions} />
            <Route path="/categories/:id" component={Categories} />
          </Switch>
        </App>
      </div>
    );
  }
}
