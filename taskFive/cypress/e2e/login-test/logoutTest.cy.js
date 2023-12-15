
import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import NavBarPage from "../../support/pageObjects/navBar.page"

describe("Logout Test", () => {
    beforeEach(() => {
        cy.visit("https://admin-demo.nopcommerce.com/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
        NavBarPage.navBarIcon.should("be.visible")
        cy.url().should("eq", "https://admin-demo.nopcommerce.com/admin/");
    });
  
    it("should log out successfully", () => {
      cy.get(".nav-link").contains("Logout").click(); 
      cy.url().should("include", "/login");
    });
  });
  