import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ToDoListApp from "./pages/ToDoListApp/ToDoListApp";
import UserApp from "./pages/UserApp/UserApp";
import ClockApp from "./pages/ClockApp/ClockApp";
import ClickerApp from "./pages/ClickerApp/ClickerApp";

import HomePage from "./pages/HomePage/HomePage";

import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/clock" component={ClockApp} />
          <Route path="/todo" component={ToDoListApp} />
          <Route path="/clicker" component={ClickerApp} />
          <Route path="/users" component={UserApp} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
