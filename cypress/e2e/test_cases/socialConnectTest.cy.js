/// <reference types="cypress"/>

import LoginPage from '../../../Pages/pageClasses/LoginPage.js';
import SocialConnectPage from '../../../Pages/pageClasses/SocialConnectPage.js';

const loginPage = new LoginPage();
const socialConnectPage = new SocialConnectPage();

describe.only('Social Connect Automation Task', () => {
    it('Logs in and connects YouTube via Google SSO', () => {
        cy.fixture('test_Data.json').then((testData) => {
            loginPage.visit();
            
            socialConnectPage.navigateToSocialConnect();
            socialConnectPage.clickYouTube();
            
            socialConnectPage.clickGoogleLogin();

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake((url) => {
                  win.location.href = url; 
                });
              });
              
            cy.loginWithGoogle(testData.googleEmail, testData.googlePassword);
            cy.contains('Continue').click();
            cy.contains('Continue').click();
            
            socialConnectPage.verifyConnectionSuccess();
        });
    });
});