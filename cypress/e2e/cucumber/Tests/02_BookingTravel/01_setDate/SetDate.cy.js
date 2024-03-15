import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const Login = require("../../../Pages/Login/LoginPage.cy");
const FlightDatePicker = require("../../../Pages/Home/FlightDatePickerPage.cy");

Given("a user is on the travel booking page", () => {
    Login.checkLoginSuccess();
});

When("the user selects the departure date", () => {
    cy.fixture('dataTravel.json').then((data) => {
        FlightDatePicker.setDepartingDatePicker(data.departureDate);
    });
});

And("select the date of returning", () => {
    cy.fixture('dataTravel.json').then((data) => {
        FlightDatePicker.setReturningDatePicker(data.returningDate);
    });
});

And("set the number of passengers to travel", () => {
    cy.fixture('dataTravel.json').then((data) => {
        FlightDatePicker.setPassengers(data.adultsPassengers,data.childrenPassengers);
    });
});

Then("the selected departure date should be displayed in the booking form", () => {
    FlightDatePicker.clickSelectDestination();
});