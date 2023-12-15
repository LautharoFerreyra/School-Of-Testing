import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import catalogProductsPage from "../../support/pageObjects/catalogProductsPage";
import addNewProductPage from "../../support/pageObjects/addNewProductPage";
import iphone11Data from "../../test-data/addProduct";

describe("Add New Product", () => {
    beforeEach(() => {
       cy.visit("/");
       LoginPage.login(loginData.validEmail, loginData.validPassword);
       cy.get(".os-content").click();
       cy.contains("Catalog").click();
       cy.contains("Products").click();
       catalogProductsPage.addNewButton.click();
       cy.get('.card-title > i.fas.fa-info').click();

    });

    it("Add iphone 11", () => {
      cy.iphone11(
        iphone11Data.ProductName,
        iphone11Data.ShortDescription,
        iphone11Data.SKU,
        iphone11Data.Manufacturers,
        iphone11Data.GTIN,
        iphone11Data.ManufacturerPartNumber
      );
      addNewProductPage.saveButton.click();
      cy.get(".alert.alert-success").should("contain", "The new product has been added successfully.");
      cy.get("#SearchProductName").type("Iphone 11");
      catalogProductsPage.searchButton.click();
      cy.contains("td", "Iphone 11").should("exist");
     });
    });