class LoginPage {
  visit() {
    const baseURL = Cypress.config('baseUrl').replace('https://', '');

    cy.fixture('test_Data.json').then((testData) => {
      cy.visit(`https://${testData.username}:${testData.password}@${baseURL}`);
    });
  }
}

export default LoginPage;