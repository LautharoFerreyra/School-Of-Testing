class LoginPage {
    get emailInput () {
      return cy.get("input#\\:r1\\:");
    }
  
    get passwordInput () {
      return cy.get("input#\\:r2\\:");
    }
  
    get loginButton () {
      return cy.get("button.MuiButton-containedSecondary");
    }
  
    get invalidUserErrorMessage () {
      return cy.get("p#\\:r2\\:-helper-text");
    }
  
    get wrongEmailErrorMessage () {
      return cy.get("p#\\:r2\\:-helper-text");
    }
  
    login(email, password) {
      this.emailInput.click().type(email);
      this.passwordInput.click().type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();