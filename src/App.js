import React, { Component } from "react";
import ShoeStore from "./components/ShoeStore";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App">Shoes shop</h1>
        <div className="container">
          <ShoeStore />
        </div>
      </div>
    );
  }
}
