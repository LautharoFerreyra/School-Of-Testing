import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import NavBarPage from "../../support/pageObjects/navBar.page";

describe("Catalog Page Buttons", () => {
    
    beforeEach(() => {
       cy.visit("/");
       LoginPage.login(loginData.validEmail, loginData.validPassword);
       NavBarPage.navBarIcon.should("be.visible");
       cy.get(".os-content").click();
       cy.contains("Content management").click();
    });

    it("Content managment, Topics ContactUs correct result", () => {
        cy.contains("Topics (pages)").click();
        cy.get(".card-body").should("be.visible");
        const topicSerch = cy.get('#SearchKeywords');
        topicSerch.type("Contact");
        topicSerch.type("{enter}"); 
        topicSerch;
        cy.get('#row_contactus > :nth-child(1)').should("be.visible")
        cy.url().should("include", "https://admin-demo.nopcommerce.com/Admin/Topic/List");
    });
    
    it("Content managment,Message templates, Active", () => {
        cy.contains("Message templates").click();
        cy.get(".card-body").should("be.visible");
        const contenteMessage = cy.get('#SearchKeywords');
        contenteMessage.type("Forums");
        contenteMessage.type("{enter}"); 
        contenteMessage;
        cy.get('.odd > :nth-child(1) ').contains("Forums.NewForumPost")
       
    });

    it("Content managment,Message templates, Inactive", () => {
        cy.contains("Message templates").click();
        cy.get(".card-body").should("be.visible");
        const contenteMessage = cy.get('#SearchKeywords');
        contenteMessage.type("OrderPaid");
        cy.get('#search-templates');
        const conttentMessageInactive = cy.get('#IsActiveId');
        conttentMessageInactive.type("{enter}");
        cy.get('.odd > :nth-child(1)').contains("Forums.NewForumPost")
       
    });





});
