Feature: Checkout process

    Scenario: Completing the checkout process with valid information
        Given I am on the checkout page
        And check the correct orden summary
        And I fill out the checkout form with valid information
        When enter a valid discount code and apply
        And I click on Pay Now button without accepting the terms and conditions
        And I should see a pop-up error message
        Then Close the modal, acept the terms and condition I can finish the pay