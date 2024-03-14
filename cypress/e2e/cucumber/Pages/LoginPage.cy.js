class LoginPage {
  enterURL() {
    cy.visit("/");
  };
  
  test = (text) => cy.log(text);
 }
 module.exports = new LoginPage();