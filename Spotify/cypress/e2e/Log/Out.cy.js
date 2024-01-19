import loginData from "../../test-data/login";
import loginPage from "../../support/pageObject/login.page";
import logoutPage from "../../support/pageObject/logout.page";

describe('LogOut Spotify', () => {

    beforeEach(() => {
      cy.visit('');
    });

    it("Must open spotify", () => {
      cy.url().should('eq', 'https://open.spotify.com/');
      cy.get('.FhYyy6QP2zu_ImcCjKWg').should("be.visible");
    });

    it("Correct LogOut", () => {
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.validEmail, loginData.validPassword)
      loginPage.loginButton.click()
      loginPage.userPicture.click();
      logoutPage.LogoutButton.click();
    });
});
