import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home, Products, ProductDetails, Cart } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout/cart" component={Cart} />
          <Route exact path="/:category" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
