
import loginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";



describe('Test Suite Delete', () => {
    
    beforeEach(() => {
        cy.visit("/");
    });


    it('Create and delete the suite ', () => {
    
      loginPage.login(loginData.validEmail, loginData.validPassword);
      cy.get('.css-19i0a4t > .MuiTypography-root').click();
      cy.get('[data-testid="addSuiteButton"]').click();

      const suiteName = "New 31";
      cy.get('[data-testid="nameInput"]').type(suiteName);
      cy.get('[data-testid="confirmButton"]').click();
  
      
      cy.get('[data-testid^="deleteSuiteButton"]').eq(0).click();
      cy.get('[data-testid="nameInput"]').type(suiteName);
      cy.get('[data-testid="confirmButton"]').click();
      
      cy.contains('[data-testid^="suiteName"]', suiteName).should('not.exist');
    });
  });
// I dont know what ´m doing :) 