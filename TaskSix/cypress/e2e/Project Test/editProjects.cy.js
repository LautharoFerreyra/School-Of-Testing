import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";

describe("Edit Project", ()=>{

    beforeEach(() => {
        cy.visit("/");
    });

   
    it ("Sucess Edit Projects ", () =>{
        LoginPage.login(loginData.validEmail, loginData.validPassword);
        cy.get('[data-testid="optionsButton"]').click(); 
        cy.get('li[data-testid="optionsButton-edit"]').click();
        cy.get('textarea[data-testid="projectDescription"]').clear();
        cy.get('[data-testid="projectDescription"]').type("Group 8 Victor and Lautharo")
        cy.get('[data-testid="email"]').type("gfh@gmail.com"); 
        cy.get('[data-testid="adminRole"] > .PrivateSwitchBase-input').click(); 
        cy.get('[style="display: flex; flex-direction: row;"] > .MuiButton-root').click();
        cy.get('[data-testid="addButton"]').click();        

    })

});