import loginData from "../../test-data/login";
import LoginPage from "../../support/pageObjects/login.page";

describe("Logout Test", () => {
    beforeEach(() => {
        cy.visit("https://d2yqnm7qbjnp0v.cloudfront.net");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
        cy.url().should("eq", "https://d2yqnm7qbjnp0v.cloudfront.net/dashboard");
    });
  
    it("should log out successfully", () => {
        cy.get('.MuiContainer-root > .MuiButton-root').click();
        cy.url().should("eq", "https://d2yqnm7qbjnp0v.cloudfront.net");
    });
});
