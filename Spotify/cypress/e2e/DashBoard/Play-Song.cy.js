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
        playsongPage.searchButton.click();
        playsongPage.searchInput.click().type("tan bionica");
        playsongPage.musicReporoduction.click({ force: true });
        playsongPage.likeButton.click();
    });

    it("Search a arist", () => {
        cy.get(':nth-child(2) > .link-subtle').click()
        cy.get('[data-testid="search-input"]').click().type("")
        cy.get('[aria-rowindex="1"] > [data-testid="tracklist-row"] > .gvLrgQXBFVW6m9MscfFA').click({ force: true });
        cy.get('[aria-rowindex="1"] > [data-testid="tracklist-row"] > .HcMOFLaukKJdK5LfdHh0')
    });
});
