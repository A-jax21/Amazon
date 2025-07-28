describe('File upload', ()=>{

    it('upload', ()=>{

        cy.viewport('iphone-8')

        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('.form-control').attachFile('Capture.JPG')
        cy.get('#fileSubmit').click()
        cy.contains('File Uploaded!').should('be.visible')

        cy.on('uncaught:exception',(err,runnable)=>false)
        


    })
})