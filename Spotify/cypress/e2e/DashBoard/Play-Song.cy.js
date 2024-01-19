import loginData from "../../test-data/login";
import loginPage from "../../support/pageObject/login.page";
import playsongPage from "../../support/pageObject/playsong.page";


describe('Play Songs', () => {

    beforeEach(() => {
      cy.visit('');
      loginPage.loginButtonWhite.click();
      loginPage.login(loginData.validEmail, loginData.validPassword);
      loginPage.loginButton.click();
    });

    

    it("Search a song", () => {
        playsongPage.searchButton.should('be.visible').click();
        playsongPage.searchButton.click();
        playsongPage.searchInput.click().type("tan bionica");
        playsongPage.musicReporoduction.click({ force: true });
    });

    it.skip("Search a arist", () => {
        playsongPage.searchButton.should('be.visible').click();
        playsongPage.searchButton.click();
        playsongPage.searchButton.click();
        playsongPage.searchInput.click().type("a");
        cy.get('[aria-rowindex="1"] > [data-testid="tracklist-row"] > .HcMOFLaukKJdK5LfdHh0')
    });
});
