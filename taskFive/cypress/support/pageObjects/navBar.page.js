class NavBarPage {

    get navBarIcon () {
        return cy.get(".logo-switch")
    }

    get setInput (){
        return cy.get("#search-box input")
    }

}

export default new NavBarPage();
