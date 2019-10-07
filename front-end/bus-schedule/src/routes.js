import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
/*import DashBoard from './pages/dashboard';
import CreateSpot from './pages/spot/create'; */

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}