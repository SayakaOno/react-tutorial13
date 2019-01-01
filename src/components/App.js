import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
        <Home />
        <About />
        <Topics />
      </div>
    );
  }
}

export default App;