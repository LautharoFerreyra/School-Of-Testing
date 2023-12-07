import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import catalogProductsPage from "../../support/pageObjects/catalogProductsPage";

describe("Catalog Page Buttons", () => {
    beforeEach(() => {
       cy.visit("/");
       LoginPage.login(loginData.validEmail, loginData.validPassword);
       cy.get(".os-content").click();
       cy.contains("Catalog").click();
       cy.contains("Products").click();
     });

     it("Add New Button Functionality", () => {
        catalogProductsPage.addNewButton.click();
        cy.contains("Add a new product").should("be.visible");
     });

     it("Import Button functionality", () => {
        catalogProductsPage.importButton.click();
        cy.get("#importexcel-window").should("be.visible");
        cy.get("#importexcel-window").contains("Import from Excel");
     });

     it("Delete Button Functionality", () => {
        catalogProductsPage.deleteSelectedButton.click();
        cy.get("#delete-selected-action-confirmation").should("be.visible");
        cy.get("#delete-selected-action-confirmation").contains("Are you sure");
        cy.get("#delete-selected-action-confirmation").contains("Yes").click();
        cy.get('#nothingSelectedAlert-action-alert ').should("be.visible");
        cy.get("#nothingSelectedAlert-action-alert").should("be.visible")
        cy.get('.modal-content').should('be.visible');
        cy.get('#nothingSelectedAlert-action-alert > .modal-dialog > .modal-content > .modal-footer > .btn').click()


      //    if (itemSelected) {
      //    cy.get(".product-item").should("not.contain", "Build your own computer");
      //   }else {
      //    cy.get("#delete-selected-action-confirmation").contains("Please select at least one record.");
      //   }
     });
});