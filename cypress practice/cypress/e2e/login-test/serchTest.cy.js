import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import NavBarPage from "../../support/pageObjects/navBar.page";

describe("NopCommerce Admin Search", () => {

  it("Should return correct results", () => {
    cy.visit("https://admin-demo.nopcommerce.com/Admin");
    LoginPage.login(loginData.validEmail, loginData.validPassword);
    NavBarPage.navBarIcon.should("be.visible");
    cy.get('.fa').type("{enter}");
    const searchInput = cy.get(".tt-input");
  searchInput.type("Payment Methods");
  cy.get(".tt-menu").children().first().type("{enter}");
    cy.url().should("eq", "https://admin-demo.nopcommerce.com/Admin/Payment/Methods");
});

  it("Should fail to find Payment Methods", () => {
    cy.visit("https://admin-demo.nopcommerce.com/Admin");
    LoginPage.login(loginData.validEmail, loginData.validPassword);
    NavBarPage.navBarIcon.should("be.visible");
    cy.get('.fa').type("{enter}")
    cy.get(".tt-input").type("Payment Methodsx");
    cy.get(".empty-message")
    cy.url().should("eq", "https://admin-demo.nopcommerce.com/Admin");
  });
  
});;




