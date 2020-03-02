import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
  from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
import {CartSummary} from "./shop/CartSummary";
import {CartSummary1} from "./shop/CartSummary1";

export default class App extends Component {

  render() {

    return <CartSummary1>

    </CartSummary1>
   /* return <Provider store={ SportsStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/shop" component={ ShopConnector } />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
*/
  }
}
