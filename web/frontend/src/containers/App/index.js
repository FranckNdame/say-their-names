import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import People from "../People";
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={People} exact />
        {/* <Route path="/people/:id" component={Person} exact /> */}
      </Switch>
    </div>
  );
}

export default App;
