// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
let dateTravel;
Cypress.Commands.add('getDateTravel', () => {
    cy.get('h3.Gallery__headline-2___3amRj')
        .invoke('text')
        .then((text) => {
            const match = text.match(/, (.+)/); 
            dateTravel = match ? match[1].replace(',', '') : null;
        });
});
export { dateTravel };
Cypress.Commands.add('getDateTravelValue', () => {
    return dateTravel;
});
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