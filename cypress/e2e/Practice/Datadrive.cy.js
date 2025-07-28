describe('Data Driven', ()=>{

    it('To login to a page',()=>{

        cy.visit('https://www.saucedemo.com/v1/')
        
        cy.fixture('datadrivenp.json').then((userdata)=>{

            cy.get('[name="user-name"]').type(userdata.username)
            cy.get('[name="password"]').type(userdata.password)
            cy.get('[type="submit"]').click()
        })
    })

})