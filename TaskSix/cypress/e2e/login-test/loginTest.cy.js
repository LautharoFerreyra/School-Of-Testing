import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";

describe("Login TMT", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Success Login", () => {
    LoginPage.login(loginData.validEmail, loginData.validPassword);
    cy.get('h5.MuiTypography-h5').should('have.text', 'DASHBOARD');
    cy.url().should("eq", "http://d2yqnm7qbjnp0v.cloudfront.net/dashboard");
  });

  it("Success Login using commands", () => {
    cy.login(loginData.validEmail, loginData.validPassword);
    cy.get('h5.MuiTypography-h5').should('have.text', 'DASHBOARD');
    cy.url().should("eq", "http://d2yqnm7qbjnp0v.cloudfront.net/dashboard");
  });

  it('should login successfully with request', () => {
    cy.request({
      method: 'POST',
      url: 'https://d2yqnm7qbjnp0v.cloudfront.net/',
      body: {
        username: 'victorgalloni.17@gmail.com',
        password: '2161995.Titi',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("Invalid Login", () => {
    LoginPage.login(loginData.invalidEmail, loginData.validPassword);
    LoginPage.invalidUserErrorMessage.should('contain.text', "Incorrect username or password.");
  });

  it("Login with uppercase letters", () => {
    LoginPage.login(loginData.validEmail.toUpperCase(), loginData.validPassword.toUpperCase());
    LoginPage.invalidUserErrorMessage.should('contain.text', "Incorrect username or password.");
  });

  it("Wrong Email", () => {
    LoginPage.login(loginData.wrongEmailFormat, loginData.validPassword);
    LoginPage.wrongEmailErrorMessage.should('have.text', "Incorrect username or password.");
  });

});


