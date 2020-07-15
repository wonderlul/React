import React from "react";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";

import Menu from "./components/Menu/Menu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/movies" component={MoviesListPage} />
          <Route path="/movie/:movieId" component={MoviesDetailsPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
