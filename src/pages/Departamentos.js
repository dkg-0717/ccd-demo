import React from "react";
import Banner from "../components/Banner";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Webpage from "./Webpage";
import GraphicDesign from "./GraphicDesign";
import GraphicUx from "./GraphicUx";

import "./styles/Departamentos.css";

function Departamentos() {
  return (
    <React.Fragment>
      <Router>
        <div className="principal">
          <Banner title="Departamentos" />
          <div className="Departamentos animated fadeIn">
            <div className="Departamentos__title">
              <ul>
                <li>
                  <Link className="text-muted" to={`/desarrollo_web`}>
                    Desarrollo web
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={`/diseno_grafico`}>
                    Diseño gráfico
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={`/diseno_ux`}>
                    Diseño UX/UI
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Departamentos__container contenedor">
              <Switch>
                <Route exact path={`/desarrollo_web`} component={Webpage} />
                <Route
                  exact
                  path={`/diseno_grafico`}
                  component={GraphicDesign}
                />
                <Route exact path={`/diseno_ux`} component={GraphicUx} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default Departamentos;
