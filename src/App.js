import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/navBar.js";
import Dashboard from "./components/dashboard/dashboard";
import ContactUs from "./components/contactUs/contactUs";
import ServiceDetails from "./components/serviceDetails/serviceDetails";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/service/:serviceId"
              component={ServiceDetails}
            />
          </Switch>
          <ContactUs />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
