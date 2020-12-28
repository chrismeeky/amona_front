import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/index";
import AllAds from "./components/AllAds/index";
import AddDetails from "./components/AdDetails/index";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Switch>
          <Route exact path="/ads" component={AllAds}></Route>
        </Switch>
        <Switch>
          <Route exact path="/ads/details" component={AddDetails}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
