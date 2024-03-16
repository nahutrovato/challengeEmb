import { dateTravel } from '../../../../support/commands';
class FormPage {
    urlCheckOut = 'https://demo.testim.io/checkout';

    inputs = {
        input: (type) =>  cy.get(`input[placeholder="${type}"]`),
        button: (value) => cy.contains('[data-react-toolbox="button"]', `${value}`)
    };

    verifyCheckOutForm(){
        cy.url(this.urlCheckOut);
        cy.get('h2.Checkout__headline-1___2KQaR').should('contain', 'Checkout');
    };

    checkNumbersOfTravelers(){
        let numbersTravelers = "";
        cy.fixture('dataTravel.json').then((data) => {;
            numbersTravelers = data.adultsPassengers + data.childrenPassengers;
        });
        const text = numbersTravelers > 1 ? 'traveler' : 'travelers'
        cy.get('.OrderSummary__row-3___1s0Ls').contains(`${numbersTravelers} ${text}`).should('exist');
    };

    checkDateTravel(){
        cy.get('div.flexboxgrid__col-xs-5___1HkK5')
            .invoke('text')
            .then((text) => {
                const dateText = text.match(/(\w{3}\s\d{1,2}\s–\s\d{1,2})/); 
                const extractedText = dateText ? dateText[0] : null;
                expect(extractedText).to.equal(dateTravel);    
        });
    };

    completeForm(){
        cy.fixture('userData.json').then((data) => {
            Object.entries(data).forEach(([key, value], index) => {
              if (index < 4) {
                cy.get(`div[data-react-toolbox="card"] input`).eq(index).type(value);
              }
            });
        });

        cy.fixture('HealthInsurance.jpg').then(fileContent => {
            cy.get('input[type="file"][multiple]').attachFile({
              fileContent: fileContent.toString(),
              fileName: 'nombre_archivo.jpg',
              mimeType: 'image/jpeg'
            });
        });
    };

    enterPromotionCode(){
       cy.fixture('userData.json').then((data) => {
            cy.get('input[name="promo"]').type(data.promotionCode);
       });
       this.clickButton('Apply');
    };

    clickButton(value){
        this.inputs.button(value).click();
    };

    isVisiblePopUpErrorModal(){
        cy.contains('h6', 'Terms and Conditions').should('exist');
    };

    checkTermsAndConditions(){
        cy.get('div[data-react-toolbox="check"]').should('exist').click();
    }
};
module.exports = new FormPage();