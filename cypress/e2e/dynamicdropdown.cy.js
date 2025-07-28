describe('Google', ()=>{

    it('Selecting value from google', ()=>{

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('Cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').each(($ele)=>{

            if($ele.text().includes('cypress automation tool')){
                cy.wrap($ele).click({force:true})
                cy.on('uncaught:exception',(err,runnable)=>false)
            }
        })

        
    })
})