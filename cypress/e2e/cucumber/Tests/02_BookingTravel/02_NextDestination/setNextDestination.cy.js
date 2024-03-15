import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const NextDestination = require('../../../Pages/Home/NextDestionationPage.cy');

Given("Im in your next destination section", () => {
    NextDestination.checkNextDestinationTitle();
});

And("check the correct mount of passengers", () => {
    cy.fixture('dataTravel.json').then((data)=> {
        NextDestination.checkPassengerCount(data.adultsPassengers+data.childrenPassengers);
    });
});

When("I select the launch and color of the planet", () => {
    cy.fixture('dataTravel.json').then((data)=> {
        NextDestination.selectLaunchPlanet(data.launchPlanet,data.colorPlanet);
    });
});

Then("complete the booking", () => {
    NextDestination.clickBookButton();
});
