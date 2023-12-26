
import loginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";

describe(" Add new suite ", ()=> {

    beforeEach(() => {
         cy.visit("/");
    });
    
    it ("Enter Test Designe Success", ()=>{
        loginPage.login(loginData.validEmail, loginData.validPassword);
        cy.get('.css-19i0a4t > .MuiTypography-root').click();
        cy.get('[data-testid="addSuiteButton"]').click();
        cy.get('[data-testid="nameInput"]').type("Suite B");
        cy.get('[data-testid="confirmButton"]').click();
    })
});