class LoginPage {
  title = 'Space & Beyond | Testim.io demo';
  
  enterHome() {
    cy.visit("/");
    cy.title().should('eq', this.title);
  };
  
  clickLogInButton(){
    cy.contains('Log in').should('be.visible').click();
  };

  enterUsernameAndPassword(){
    cy.fixture('userData.json').then((data) => {
      cy.get('form[id="login"] input').eq(0).type(data.email);
      cy.get('input[type="password"]').type(data.password);
      cy.get('button[type="submit"]').click();
    });
   
  };
  
  checkLoginSuccess(){
    cy.get('button[type="button"] span').eq(0).contains('Hello, John');
  };

 }
 module.exports = new LoginPage();