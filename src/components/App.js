import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departamentos" component={Departamentos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
