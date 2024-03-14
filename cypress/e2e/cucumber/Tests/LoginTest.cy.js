import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const login = require("../Pages/LoginPage.cy")

Given("I navigate to the Website", () => {
login.enterURL();
});

When("I entered valid credential", () => {
login.test("TEST")
});

And("User click on sign in button", () => {
    login.test("TEST")
});

Then("Validate the title after login", () => {
    login.test("TEST")
});