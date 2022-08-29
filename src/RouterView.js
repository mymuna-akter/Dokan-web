import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import Memo from "./pages/Memo"

const RouterView = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/memo">
                <Memo />
            </Route>
        </Switch>
    )
};

export default RouterView