Feature: I want to book a travel for three people

    Scenario: Login as new sign up user with valid data
        Given I navigate to the Website
        When I click on Log in button
        And I log in with user "john@test.com" and password "testJohn"
        Then Validate the success log in

    Scenario: Select travel date 
        Given a user is on the travel booking page
        When the user selects the departure date in "2" days
        And the date of returning is in "5" days after
        Then the selected departure date should be displayed in the booking form