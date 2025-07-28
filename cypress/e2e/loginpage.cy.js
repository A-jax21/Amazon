// describe('Login page', ()=>{

//     it('to login', ()=>{

//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('input#username').type('student')
//         cy.get('input#password').type('Password123')
//         cy.get('.btn').click()
//         cy.contains('Congratulations').should('be.visible')
//         cy.contains('successfully logged in').should('be.visible')
//         cy.contains('Log out').should('be.visible')
//         cy.get('[class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').should('be.visible').click()
//     })

// })


describe('Positive Login test',()=>{

    it('Login',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('.btn').click()
        cy.contains('Congratulations').should('be.visible')


    })
})


                        