/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const generarNombres = () => {
    let nombredominios = [];
    // Iterar sobre el array pronoun que a su vez itera sobre adj y este a su vex itera sobre noum
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          // Agregar el nombre de dominio al array.
          let nombredominio = pronoun[i] + adj[a] + noun[n] + ".com";
          nombredominios.push(nombredominio);
        }
      }
    }
    // Retornar el array con todas las combinaciones posibles
    return nombredominios;
  };

  let nombredominios = generarNombres(pronoun, adj, noun);

  // Imprimir los nombres de dominio correctamente
  for (let x = 0; x < nombredominios.length; x++) {
    console.log(nombredominios[x]);
  }
};
