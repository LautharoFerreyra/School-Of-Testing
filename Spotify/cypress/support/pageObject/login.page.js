class LoginPage{ 

    get loginButtonGreen(){
        return cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0')
    }
    get spotifyImagen(){
        return cy.get('.sc-lbVpMG')
    }
    get loginBox(){
        return cy.get('[data-testid="login-username"]')
    }
    get passwordBox(){
        return cy.get('[data-testid="login-password"]')
    }
    get loginButton(){
        return cy.get('.ButtonInner-sc-14ud5tc-0')
    }
    get wrongPassword(){
        return cy.get('.Message-sc-15vkh7g-0')
    }
    get userPicture(){
        return cy.get('[data-testid="user-widget-link"]')
    }
    login(email, password) {
        this.loginBox.click().type(email);
        this.passwordBox.click().type(password);
        this.loginButton.click();
    }

}

export default new LoginPage();