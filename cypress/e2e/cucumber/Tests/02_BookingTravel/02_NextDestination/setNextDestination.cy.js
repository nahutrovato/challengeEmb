import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const NextDestination = require('../../../Pages/Home/NextDestionationPage.cy');

Given("Im in your next destination section", () => {
    NextDestination.checkNextDestinationTitle();
});

And("check the correct mount of passengers", () => {
    NextDestination.checkPassengerCount();
});

When("I select the launch and color of the planet", () => {
    NextDestination.selectLaunchPlanet();
});

Then("verify the date travel and complete the booking", () => {
    NextDestination.getDateTravel();
    NextDestination.clickBookButton();
});
