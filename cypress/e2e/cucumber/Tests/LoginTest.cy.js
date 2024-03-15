import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const Login = require("../Pages/LoginPage.cy")
const FlightDatePicker = require("../Pages/FlightDatePickerPage.cy");

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

Given("a user is on the travel booking page", () => {
    Login.checkLoginSuccess();
});

When("the user selects the departure date in {string} days", (departingDay) => {
    FlightDatePicker.setDepartingDatePicker(departingDay);
});

And("the date of returning is in {string} days after", (returningDay) => {
    const intReturningDay = parseInt(returningDay);
    FlightDatePicker.setReturningDatePicker(intReturningDay);
});

Then("the selected departure date should be displayed in the booking form", () => {
    Login.checkLoginSuccess();
});