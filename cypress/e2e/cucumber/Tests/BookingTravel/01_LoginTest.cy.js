import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const Login = require("../../Pages/Login/LoginPage.cy")

Given("I navigate to the Website", () => {
    Login.enterHome();
});

When("I click on Log in button", () => {
    Login.clickLogInButton();
});

And("I log in with valid credentials username and password", () => {
    Login.enterUsernameAndPassword() 
});

Then("Validate the success log in", () => {
    Login.checkLoginSuccess();
});
