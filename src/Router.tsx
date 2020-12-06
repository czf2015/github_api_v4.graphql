import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Demo from '@/pages/demo/App'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
            exact
            path="/"
            component={Demo}
          />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
