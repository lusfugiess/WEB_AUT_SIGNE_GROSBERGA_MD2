describe('Appointment Scenarios', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsAPassword');
    cy.get('#btn-login').click();
  });

  it('Scenario 1: Make an Appointment', () => {

    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('2023');
    cy.get(".react-datepicker__day").contains("30").click();

    cy.get('#txt_comment').type('CURA Healthcare Service');
    cy.get('#btn-book-appointment').click();    
  });

  
});
