Feature: I want to book a travel for three people

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Login as new sign up user with valid data
    When I click on Log in button
    And I log in with user "john@test.com" and password "testJohn"
    Then Validate the success log in