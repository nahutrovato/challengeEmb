Feature: Booking a travel date  

Scenario: Select travel date 
        Given a user is on the travel booking page
        When the user selects the departure date
        And select the date of returning
        And set the number of passengers to travel
        Then the selected departure date should be displayed in the booking form