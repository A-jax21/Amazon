describe('Mouse Hover task', ()=>{

    it('Mouse Hover', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.get('[href="#top"').click({force: true})
        cy.contains('Practice Page').should('be.visible')
    })
})