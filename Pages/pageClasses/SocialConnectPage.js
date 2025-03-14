class SocialConnectPage {

    navigateToSocialConnect() {
        cy.fixture('test_Data.json').then((testData) => {
          const baseURL = Cypress.config('baseUrl').replace('https://', '');
          
          cy.visit(`https://${testData.username}:${testData.password}@${baseURL}/social-connect`, {
            failOnStatusCode: false
          });
      
          cy.wait(300);
        });
      }
    clickYouTube() {
        cy.contains('Youtube Soon!').parent().find('img').click();
    }
    clickGoogleLogin() {    
        cy.get('app-google-and-youtube-login').find('button').click();
    }
    verifyConnectionSuccess() {
        cy.contains('@dina_bakery_shop').should('be.visible');
    }
}
export default SocialConnectPage;