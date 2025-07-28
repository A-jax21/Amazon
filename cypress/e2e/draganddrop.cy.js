describe('drag and drop', ()=>{

    it('drag', ()=>{

        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#node').drag('#droparea')
        cy.on('uncaught:exception',(err,Runnable)=>false)


    })
})