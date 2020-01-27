import React from "react";

import "./styles/GraphicUx.css";
import data from "../assets/data/members.json";
import Uximage from "../assets/img/ux.png";
import Members from "../components/Members";

function GraphicUx() {
  return (
    <div className="container animated fadeIn">
      <div className="row mt-5 c-disenoux">
        <div className="col-md-6 col-sm-6">
          <div className="image graphic_ux d-flex justify-content-center align-items-center">
            <div className="image__container d-flex justify-content-center align-items-center">
              <img height="250" width="250" src={Uximage} alt="diseno ux" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="description">
            <div className="description__container d-flex justify-content-center align-items-center">
              <h2>Diseño UX/UI</h2>
              <p>
                Se dedica propiamente al desarrollo de las plataformas web y
                móvil del CCD. Busca soluciones funcionales, visuales,
                interactivas y creativas para extender los alcances del programa
                del CCD más allá de su espacio físico.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <h2>Integrantes</h2>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-5">
        <div className="col-md-12">
          <Members members={data} type="diseno_ux" />
        </div>
      </div>
    </div>
  );
}

export default GraphicUx;
