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

    checkPassengerCount(mountTravelers){
        cy.get('h3.Gallery__headline-2___3amRj')
            .contains(`${mountTravelers} travelers`)
            .should('exist')
            .and('be.visible');
    };

    selectLaunchPlanet(launchPlanet,colorPlanet){
        this.selectors.input('Launch').click();
        this.selectors.dropdown(launchPlanet).click();
        this.selectors.input('Planet color').click();
        this.selectors.dropdown(colorPlanet).click();
    };

    clickBookButton(){
        cy.get('[data-react-toolbox="button"]').contains('Book').click();
    }

}
module.exports = new NextDestination();