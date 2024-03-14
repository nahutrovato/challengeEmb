import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const Login = require("../Pages/LoginPage.cy")

Given("I navigate to the Website", () => {
    Login.enterURL();
});

When("I click on Log in button", () => {
    Login.clickLogInButton();
});

And("I log in with user {string} and password {string}", (username,password) => {
    Login.enterUsernameAndPassword(username,password)
});

Then("Validate the success log in", () => {
    Login.checkLoginSuccess();
});