describe('Navigation task', ()=>{

    it('Navigation', ()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('[href="Index.html"]').click()
        cy.on('uncaught:exception',(err,runnable)=>false)
        cy.go('back')
    })
})