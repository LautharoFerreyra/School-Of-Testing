class LogOutPage{
    get LogoutButton(){
        return cy.get('[data-testid="user-widget-dropdown-logout"]')
    }

} 


export default new LogOutPage();