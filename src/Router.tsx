import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Demo from '@/pages/demo/App'
import Search from '@/pages/search'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
            exact
            path="/"
            component={Demo}
          />
          <Route
            exact
            path="/search"
            component={Search}
          />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
