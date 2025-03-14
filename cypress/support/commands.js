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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

//   Cypress.Commands.add('loginWithGoogle', (email, password) => {
//     cy.origin('https://accounts.google.com', () => {
//         cy.get('input[type="email"]',{ timeout: 10000 }).type(email, { force: true }).type('{enter}');
//         cy.wait(2000);
//         cy.get('input[type="password"]',{ timeout: 10000 }).type(password, { force: true }).type('{enter}');
//     });
// });
  
// Cypress.Commands.add('loginWithGoogle', (email, password) => {
//   cy.visit('https://accounts.google.com');
//   cy.get('input[type="email"]').type(email);
//   cy.get('#identifierNext').click();
//   cy.get('input[type="password"]').type(password);
//   cy.get('#passwordNext').click();
// });

// Cypress.Commands.add('loginWithGoogle', (email, password) => {
//   cy.visit('https://accounts.google.com');

//   cy.origin('https://accounts.google.com', { args: { email, password } }, ({ email, password }) => {
//     cy.get('input[type="email"]').type(email);
//     cy.get('#identifierNext').click();
//     cy.get('input[type="password"]').type(password, { log: false });
//     cy.get('#passwordNext').click();
//   });
// });

Cypress.Commands.add('loginWithGoogle', (email, password) => {
  cy.visit('https://accounts.google.com');

  cy.origin('https://accounts.google.com', { args: { email, password } }, ({ email, password }) => {
    
    cy.get('#identifierId').type(email, { delay: 100 }); 
    cy.wait(500); 
    cy.contains('Next').click();

    
    cy.get('#password > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .should('be.visible')
      .type(password, { delay: 100, log: false }); // 
    cy.wait(500); 
    cy.contains('Next').click();
  });
});




import 'cypress-file-upload';
import { text } from 'wd/lib/commands'
require('cypress-xpath');
import '@testing-library/cypress/add-commands';