// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import LoginPage from "./pageObjects/login.page";

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    LoginPage.login(email, password);
 });

Cypress.Commands.add('iphone11', (productName, shortDescription, sku, gtin, manufacturerPartNumber) => {
    cy.get('input#Name').clear().type(productName);
    cy.get('textarea#ShortDescription').clear().type(shortDescription);
    cy.get('input#Sku').clear().type(sku);
    cy.get('input#Gtin').clear().type(gtin);
    cy.get('input#ManufacturerPartNumber').clear().type(manufacturerPartNumber);
  });
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })