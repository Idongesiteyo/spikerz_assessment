// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// import '@shelex/cypress-allure-plugin';

import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep();
    
import 'cypress-xpath'; 

// Alternative method using import (use either this OR the require method above, not both)
// import '@cypress/grep'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Optional: Add grep debugging
// Cypress.on('test:before:run', (test) => {
//     console.log('Current grep pattern:', Cypress.env('grep'))
//     console.log('Running test:', test.title)
// })

// Prevent Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught Exception:', err.message);
    return false;
});
