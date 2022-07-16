import React, { Component } from "react";

export default class App extends Component {
  frase = () => {
    return <h1>Uma espada é uma péssima companhia para jornadas</h1>;
  };

  dobro = (numero) => {
    return 2 * numero;
  };

  render() {
    return (
      <section>
        <h1>{this.frase()}</h1>
        <h2>{this.dobro(2)}</h2>
      </section>
    );
  }
}
