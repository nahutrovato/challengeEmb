Feature: I want to book a travel for three people

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Login as new sign up user with valid data
    When I entered valid credential
      | email                    | validpassword |
      | lambdatest11@yopmail.com | lambdatest21    |
    And User click on sign in button
    Then Validate the title after login