class LoginPage {
  enterURL() {
    cy.visit("/");
  };
  
  clickLogInButton(){
    cy.contains('Log in').should('be.visible').click();
  };

  enterUsernameAndPassword(username,password){
    cy.get('form[id="login"] input').eq(0).type(username);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
  };
  
  checkLoginSuccess(){
    cy.get('button[type="button"] span').eq(0).contains('Hello, John');
  };

 }
 module.exports = new LoginPage();