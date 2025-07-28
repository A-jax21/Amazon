// describe('Negative username', ()=>{

//     it('wrong user', ()=>{

//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('input#username').type('incorrectUser')
//         cy.get('input#password').type('Password123')
//         cy.get('button#submit').click()
//         cy.contains('Your username is invalid!').should('be.visible')

//     })
// })

// describe('Negative Password', ()=>{

//     it('wrong password', ()=>{

//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('input#username').type('student')
//         cy.get('input#password').type('incorrectPassword')
//         cy.get('button#submit').click()
//         cy.contains('Your password is invalid!').should('be.visible')
//     })
// })



// describe('Switch tab', ()=>{

//     it('New tab', ()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('[class="btn-style class1 class2"]').invoke('removeAttr', 'target').click()

//     })
// })
