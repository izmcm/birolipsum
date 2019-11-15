import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Title from "./Title";
import Home from "../views/Home";
import About from "../views/About";
import Contribute from "../views/Contribute";

const Menu = props => {
  return (
    <Router>
      <header>
        <Title />
        <div className="menu">
          <NavLink exact={true} to="/" activeClassName="chosen">
            Gerador
          </NavLink>
          <NavLink to="/about" activeClassName="chosen">
            Sobre
          </NavLink>
          <NavLink to="/contribute" activeClassName="chosen">
            Contribuir
          </NavLink>
        </div>
      </header>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default React.memo(Menu);
