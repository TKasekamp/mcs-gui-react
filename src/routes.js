import React from 'react';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';
// Containers
import Full from './containers/Full/';
import Dashboard from './views/Dashboard/';
import COM from './views/COM/COM';
// import Simple from './containers/Simple/'

export default (
    <Router history={hashHistory}>
        <Route path="/" name="Home" component={Full}>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" name="Dashboard" component={Dashboard}/>
            <Route path="com" name="COM subsystem" component={COM}/>
        </Route>
    </Router>
);
