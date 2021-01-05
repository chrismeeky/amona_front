import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/index";
import AllAds from "./components/AllAds/index";
import AddDetails from "./components/AdDetails/index";
import Registration from "./components/Authentication/Registration/index";
import NewAd from "./components/NewAd/index";
import Dashboard from "./components/Dashboard/index";
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
        <Switch>
          <Route exact path="/registration" component={Registration}></Route>
        </Switch>
        <Switch>
          <Route exact path="/ads/new" component={NewAd}></Route>
        </Switch>
        <Switch>
          <Route exact path="/account" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
