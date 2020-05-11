// Feature: Add user
//   It adds a new user to the table based on the form submitted.
 
//   Scenario: Adding user successfuly
//     Given I visit the main page 
//     And I type a user name and job
//     When I click on the submit button
//     Then a new user is added to the table with the given name and job

describe('Adding user successfulyt', () => {
    it('Given I visit the main page', () => {
        cy.visit('http://localhost:3000')        
    })

    it('And I type a user name and job', () => {
        cy.get('Form').within(() => {
            cy.get('input[name="name"]').type('Pamela') 
            cy.get('input[name="job"]').type('Developer')
          })
    })

    it('When I click on the submit button', () => {
        cy.get('Form').within(() => {
            cy.get('input[type="button"]').click()
        })
    })

    it('Then a new user is added to the table with the given name and job', () => {   
        cy.get('tr').eq(-1).should('contain', 'Pamela')
        cy.get('tr').eq(-1).should('contain', 'Developer')
    })
  })