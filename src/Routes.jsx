import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
//import Typography from './views/Typography';
// import Icons from './views/Icons';
import Account from './views/Account';
import TimeTables from './views/TimeTables'
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import TimeTable from './views/TimeTable';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/sign-in"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />

        <Route
          exact
          path="/:type/dashboard"
          render={({match}) => 
            <Dashboard type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/users"
          render={({match}) => 
            <UserList type={match.params.type} />
          }
        />
        <Route
          component={UserList}
          exact
          path="/users"
        />
        <Route
          component={ProductList}
          exact
          path="/products"
        />
        {/* <Route
          component={Typography}
          exact
          path="/typography"
        /> */}
        {/* <Route
          component={Icons}
          exact
          path="/icons"
        /> */}
        <Route
          component={Account}
          exact
          path="/account"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
         <Route
          component={TimeTable}
          exact
          path="/sign-in"
        />
         <Route
          component={TimeTables}
          exact
          path="/timetable"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    );
  }
}
