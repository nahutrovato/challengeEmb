Feature: I want to book a travel for three people

    Scenario: Login as new sign up user with valid data
        Given I navigate to the Website
        When I click on Log in button
        And I log in with valid credentials username and password
        Then Validate the success log in
