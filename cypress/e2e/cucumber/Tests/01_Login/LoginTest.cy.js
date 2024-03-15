import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const Login = require("../../Pages/Login/LoginPage.cy")
//const FlightDatePicker = require("../Pages/Home/FlightDatePickerPage.cy");

Given("I navigate to the Website", () => {
    Login.enterHome();
});

When("I click on Log in button", () => {
    Login.clickLogInButton();
});

And("I log in with valid credentials username and password", () => {
    cy.fixture('userData.json').then((data) => {
        Login.enterUsernameAndPassword(data.email,data.password)
    });
});

Then("Validate the success log in", () => {
    Login.checkLoginSuccess();
});

// Given("a user is on the travel booking page", () => {
//     Login.checkLoginSuccess();
// });

// When("the user selects the departure date in {string} days", (departingDay) => {
//     FlightDatePicker.setDepartingDatePicker(departingDay);
// });

// And("the date of returning is in {string} days after", (returningDay) => {
//     const intReturningDay = parseInt(returningDay);
//     FlightDatePicker.setReturningDatePicker(intReturningDay);
// });

// Then("the selected departure date should be displayed in the booking form", () => {
//     Login.checkLoginSuccess();
// });