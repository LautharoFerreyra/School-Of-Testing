import loginData from "../test-data/login";
import loginPage from "../support/pageObject/login.page";


describe('Login Spotify', () => {

    beforeEach(() => {
      cy.visit('');
    });

    it('Must open spotify', () => {
      cy.url().should('eq', 'https://open.spotify.com/');
      cy.get('.FhYyy6QP2zu_ImcCjKWg').should("be.visible");
    });

    it('Should be logIn', () => {
      loginPage.loginButtonGreen.click();
      loginPage.login(loginData.validEmail, loginData.validPassword)
      loginPage.loginButton.click()
      cy.get('[data-testid="user-widget-link"]').should("be.visible")
    });

    it('@Smoke - Wrong mail', () => {
      loginPage.loginButtonGreen.click();
      loginPage.login(loginData.invalidEmail, loginData.validPassword);
      loginPage.loginButton.click()
      loginPage.wrongPassword.should("be.visible")

    });

    it('@Smoke - Login with uppercase letters', () => {
      loginPage.loginButtonGreen.click();
      loginPage.login(loginData.validEmail.toUpperCase(), loginData.validPassword.toUpperCase())
      loginPage.loginButton.click()
      loginPage.wrongPassword.should("be.visible")
    });

    it('@Smoke - Wrong Format', () => {
      loginPage.loginButtonGreen.click();
      loginPage.login(loginData.wrongEmailFormat, loginData.validPassword);
      loginPage.loginButton.click()
      loginPage.wrongPassword.should("be.visible")
    });
});

  