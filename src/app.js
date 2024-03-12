/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const generateDomains = () => {
    let domainNames = [];

    // Iterating over the pronoun array which in turn iterates over adj and this in turn iterates over noun
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          // Adding the domain name to the array
          let domainName = pronoun[i] + adj[a] + noun[n] + ".com";
          domainNames.push(domainName);
        }
      }
    }

    // Returning the array with all possible combinations
    return domainNames;
  };

  let domainNames = generateDomains(pronoun, adj, noun);

  // Printing the domain names correctly
  for (let x = 0; x < domainNames.length; x++) {
    console.log(domainNames[x]);
  }

  let paragraph = document.getElementById("domain_generator");

  // Adding the domain names as paragraphs
  domainNames.forEach(domain => {
    // Creating a new paragraph element
    let newParagraph = document.createElement("p");

    // Assigning the domain name text to the paragraph
    newParagraph.textContent = domain;

    // Adding the paragraph to the main paragraph
    paragraph.appendChild(newParagraph);
  });
};
