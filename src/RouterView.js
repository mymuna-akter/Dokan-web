import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import Ledger from "./pages/Ledger"

const RouterView = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/ledger">
                <Ledger />
            </Route>
        </Switch>
    )
};

export default RouterView