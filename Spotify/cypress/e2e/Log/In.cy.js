import loginData from "../../test-data/login";
import loginPage from "../../support/pageObject/login.page.js";


describe('LogIn Spotify', () => {

    beforeEach(() => {
      cy.visit('');
    });

    it('Must open spotify', () => {
      cy.url().should('eq', 'https://open.spotify.com/');
      cy.get('.FhYyy6QP2zu_ImcCjKWg').should("be.visible");
    });

    it.skip('@Smoke - Should be logIn', () => {
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.validEmail, loginData.validPassword);
      loginPage.loginButton.click();
      loginPage.userPicture.should("be.visible");
    });

    // it('@Smoke - Gmail LogIn', () => {
    //   loginPage.loginButtonWhite.click();
    //   cy.get('[data-testid="google-login"]')
    //   cy.loginByGoogleSocialLogin({
    //     login_hint: 'ellautha@gmail.com'
    //   });
    //   // cy.get('div[data-identifier="ellautha@gmail.com"]')
    //   // cy.get('button.VfPpkd-LgbsSe[jsname="LgbsSe"]')
    // });


    it.skip('Wrong mail', () => {
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.invalidEmail, loginData.validPassword);
      loginPage.loginButton.click()
      loginPage.wrongPassword.should("be.visible");

    });

    it.skip('Login with uppercase letters', () => {
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.validEmail.toUpperCase(), loginData.validPassword.toUpperCase());
      loginPage.loginButton.click();
      loginPage.wrongPassword.should("be.visible");
    });

    it.skip('Wrong Format', () => {
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.wrongEmailFormat, loginData.validPassword);
      loginPage.loginButton.click();
      loginPage.wrongPassword.should("be.visible");
    });
});

  