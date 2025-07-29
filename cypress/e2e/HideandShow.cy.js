describe('Hide and show task', ()=>{

    it('Hide and show', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').type('Ajay Cypress')
        cy.get('#hide-textbox').click()
        cy.get('#show-textbox').click()
    })
})
