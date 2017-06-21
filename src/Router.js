// React Router Required Objects
import React   from 'react';
import {Route, Router, hashHistory, IndexRoute} from "react-router";

// const Route   = router.Route;
// const Router  = router.Router;
// const hashHistory   = router.hashHistory;
// const IndexRoute    = router.IndexRoute;

import App       from './App';
import Cook      from './components/cook';
import CookItem  from './components/cook/CookItem';
import CookInfo  from './components/customer/CookInfo';

import Customer           from './components/customer';
import CustomerDash       from './components/customer/CustomerDash';
import CustomerFilterPage from './components/customer/CustomerFilterPage';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="customer" component={Customer} >

        <Route path="dashboard" component={CustomerDash} />
        <Route path="cookinfo/:cookid" component={CookInfo} />

        <IndexRoute component={CustomerDash} />
      </Route>

      <Route path="cook" component={Cook}>
        <Route path="cook-content" component={CookItem} />
        <IndexRoute component={CookItem} />
      </Route>

      <IndexRoute component={Customer} />
    </Route>
  </Router>
);