describe('Login test case', ()=>{

    it ('Login', ()=>{

        cy.visit('https://practice.expandtesting.com/login')
        cy.contains('Test Login page for Automation Testing Practice').should('be.visible')
        cy.title().should('eq', 'Test Login Page for Automation Testing Practice')
        cy.get('#username').type('practice')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('[class="btn btn-bg btn-primary d-block w-100"]').click()
        cy.contains('You logged into a secure area!').should('be.visible')
        cy.contains('Logout').should('be.visible')


    })


})