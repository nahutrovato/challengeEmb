import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const Form = require('../../Pages/Form/FormPage.cy');

Given("I am on the checkout page", () => {
    Form.verifyCheckOutForm();
});

And("check the correct orden summary", () => {
    Form.checkNumbersOfTravelers();
    Form.checkDateTravel();  
});

And("I fill out the checkout form with valid information", () => {
    Form.completeForm();
});

When("enter a valid discount code and apply", () => {
    Form.enterPromotionCode();
});

And("I click on Pay Now button without accepting the terms and conditions", () => {
    Form.clickButton('Pay now');
});

And("I should see a pop-up error message", () => {
    Form.isVisiblePopUpErrorModal();
});

Then("Close the modal, acept the terms and condition I can finish the pay", () => {
    Form.clickButton('Close');
    Form.checkTermsAndConditions();
    Form.clickButton('Pay now');
});