class DatePicker {
    departingDay = "";
    returningDay = "";
    numberOfPassengers = "";
    dateDeparture = ""
    dateReturning = ""

    dataPicker = {
        openDataPicker: (eq) => cy.get('[data-react-toolbox="date-picker"]').eq(eq),
        calendar: () => cy.get('.theme__day___3cb3g').not('.theme__disabled___2N4Gy'),
        buttonOK: () => cy.get('nav[role="navigation"] button').eq(1),
        openDropdown: (value) => cy.get(`input[value="${value}"]`),
        dropdownNumber: (passengers ) => cy.get('div[class*=theme__active]').contains('li', passengers)
    };

    setDepartingDatePicker(){
        cy.fixture('dataTravel.json').then((data) => {
            this.departingDay = data.departureDate - 1
        });
        this.dataPicker.openDataPicker(0).click();
        this.dataPicker.calendar().eq(this.departingDay).click();
        this.dataPicker.buttonOK().click();
    };

    setReturningDatePicker(){
        cy.fixture('dataTravel.json').then((data) => {
            this.returningDay = this.departingDay + data.returningDate;
        });
        this.dataPicker.openDataPicker(1).click();
        cy.get('.theme__day___3cb3g').not('.theme__disabled___2N4Gy').eq(this.returningDay).click();
        this.dataPicker.buttonOK().click();
    };

    setPassengers(){
        cy.fixture('dataTravel.json').then((data) => {
            this.numberOfPassengers = parseInt(data.adultPassengers) + parseInt(data.childrenPassengers);
            this.dataPicker.openDropdown("Adults (18+)").click();
            this.dataPicker.dropdownNumber(data.adultsPassengers).click();
            this.dataPicker.openDropdown("Children (0-7)").click();
            this.dataPicker.dropdownNumber(data.childrenPassengers).click();
        });
    };

    clickSelectDestination(){
        cy.get('button').contains('Select Destination').click();
    };
}
module.exports = new DatePicker();