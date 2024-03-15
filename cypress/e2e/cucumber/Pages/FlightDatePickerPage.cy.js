class DatePicker {
    departingDay = "";
    
    dataPicker = {
        calendar: () => cy.get('.theme__day___3cb3g').not('.theme__disabled___2N4Gy'),
        buttonOK: () => cy.get('nav[role="navigation"] button').eq(1),
    };

    setDepartingDatePicker(departingDay){
        this.departingDay = departingDay - 1
        cy.get('[data-react-toolbox="date-picker"]').eq(0).click();
        this.dataPicker.calendar().eq(this.departingDay).click();
        this.dataPicker.buttonOK().click();
    };

    setReturningDatePicker(returningDay){
        returningDay = this.departingDay + returningDay;
        cy.get('[data-react-toolbox="date-picker"]').eq(1).click();
        cy.get('.theme__day___3cb3g').not('.theme__disabled___2N4Gy').eq(returningDay).click();
        this.dataPicker.buttonOK().click();
    };
}
module.exports = new DatePicker();