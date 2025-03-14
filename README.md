Social Connect Automation Task

This project automates the process of logging in and connecting a YouTube account via Google SSO using Cypress. The test suite handles authentication, page navigation, and connection verification through Cypress commands and page object classes.

Project Structure

├── cypress/
│   ├── e2e/
│   │   └── test_cases/
│   │       └── social_connect.spec.js
│   ├── fixtures/
│   │   └── test_Data.json
│   └── Pages/
│       └── pageClasses/
│           ├── LoginPage.js
│           └── SocialConnectPage.js
├── cypress.config.js
└── package.json

Installation

1. Clone the repository:
git clone https://github.com/Idongesiteyo/spikerz_assessment.git

2. Install the dependencies:

npm install

3. Add your test data in the cypress/fixtures/test_Data.json file:

{
  "username": "your_username",
  "password": "your_password",
  "googleEmail": "your_google_email",
  "googlePassword": "your_google_password"
}

Use .env file to store sensitive test data

4. Configure the cypress.config.js file:

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.spikerz.com',
    defaultCommandTimeout: 120000,
    chromeWebSecurity: false
    reporter: 'cypress-mochawesome-reporter
  }
});

Test Workflow

- Login to Application:
The LoginPage class handles logging in with basic auth credentials.
- Navigate to Social Connect:
The SocialConnectPage class navigates to the Social Connect section.
- Google SSO Login:
The test triggers a Google login using a custom Cypress command (loginWithGoogle).
-  Connection Success:
The test checks that the connected account (@dina_bakery_shop) is displayed.

- Running the Tests
To run the tests, use the Cypress Test Runner:
npx cypress open

- Or run headlessly:
npm run test:single

- Run the test on the CI
npm run test:ci

- Cross Browser compatibility
The test is designed to run on Chrome and Edge browsers.
This was achieved by defining these browsers on the GitHub actions workflow.

- Troubleshooting
Cross-Origin Issues: Use cy.origin() when interacting with Google login.

- Error Handling is handled by
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught Exception:', err.message);
    return false;
}); 

