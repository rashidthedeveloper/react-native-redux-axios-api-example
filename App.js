import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Home />
      </Provider>
    );
  }
}
