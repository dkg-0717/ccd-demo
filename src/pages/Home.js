import React from "react";
import "./styles/Home.css";
import feriaData from "../assets/data/feria_libro.json";
import Particles from "react-particles-js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: []
    };
  }

  componentDidMount() {
    this.filterData();
  }

  filterData = () => {
    let result = feriaData.filter(state => this.filterState(state));
    this.setState({ states: result });
  };

  filterState = state => {
    let { nom_ent } = state;
    let states = ["Baja California", "Hidalgo", "Zacatecas"];
    return states.includes(nom_ent) ? state : null;
  };

  render() {
    return (
      <div className="home animated fadeIn">
        <div className="home__container">
          <h1>EL CCD es...</h1>
          <h1>Hola</h1>
        </div>
        <Particles
          className="canvas-wrapper"
          params={{
            particles: {
              number: {
                value: 100
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          // style={{
          //   width: "500",
          //   height: "500"
          // }}
          canvasClassName="canvas-style"
        />
      </div>
    );
  }
}
