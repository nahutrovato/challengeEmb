import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const Login = require("../../../Pages/Login/LoginPage.cy");
const FlightDatePicker = require("../../../Pages/Home/FlightDatePickerPage.cy");

Given("a user is on the travel booking page", () => {
    Login.checkLoginSuccess();
});

When("the user selects the departure date", () => {
    FlightDatePicker.setDepartingDatePicker();
});

And("select the date of returning", () => {
    FlightDatePicker.setReturningDatePicker();
});

And("set the number of passengers to travel", () => {
    FlightDatePicker.setPassengers();
});

Then("the selected departure date should be displayed in the booking form", () => {
    FlightDatePicker.clickSelectDestination();
});