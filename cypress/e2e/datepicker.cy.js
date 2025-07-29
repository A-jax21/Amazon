// Scenario 1 new update for TrainMMT

describe('Hooks concept', ()=>{

    beforeEach(()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

    })

    it('date picker',()=>{
        cy.get('#datepicker').type('21/06/1996')
    })   


})