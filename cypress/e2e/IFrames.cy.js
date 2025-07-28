describe('I frame task', ()=>{

    it('Implementing i frame task', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('[href="learning-path"]').eq(0).should('have.text','Learning paths')


    })
})