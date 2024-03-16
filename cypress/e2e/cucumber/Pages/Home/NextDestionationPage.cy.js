class NextDestination {
    titleNextDestination = "Your next destination";
   
    selectors = {
        input: (name) => cy.get(`input[value="${name}"]`),
        dropdown: (data) => cy.get('ul.theme__values___1jS4g li').contains(data)
    };

    checkNextDestinationTitle(){
        cy.get('h2.Gallery__headline-1___2lHj5')
            .contains(this.titleNextDestination)
            .should('exist')
            .and('be.visible');
    };

    checkPassengerCount(){
        cy.fixture('dataTravel.json').then((data)=> {
            cy.get('h3.Gallery__headline-2___3amRj')
            .contains(`${data.adultsPassengers + data.childrenPassengers} travelers`)
            .should('exist')
            .and('be.visible');
        }); 
    };

    selectLaunchPlanet(){
        cy.fixture('dataTravel.json').then((data)=> {
            this.selectors.input('Launch').click();
            this.selectors.dropdown(data.launchPlanet).click();
            this.selectors.input('Planet color').click();
            this.selectors.dropdown(data.colorPlanet).click();
        });    
    };
    
    clickBookButton(){
        cy.get('[data-react-toolbox="button"]').contains('Book').click();
    };

    getDateTravel(){cy.getDateTravel()};

};

module.exports = new NextDestination();