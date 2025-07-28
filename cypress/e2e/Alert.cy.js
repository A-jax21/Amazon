// describe('Alert testing',()=>{

//     it('alert',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#name').type('Hello guys')
//         cy.get('#alertbtn').click()

//         cy.on('window:alert',(text)=>{
//             expect(text).to.eq('Hello Hello guys, share this practice page and share your knowledge')
//             return true;
//         })
//     })
// })


describe('Alert testing',()=>{

    it('alert',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type('Ravi')
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(text)=>{
            expect(text).to.eq('Hello Ravi, Are you sure you want to confirm?')
            return true;
        })
    })

    it('test automation simple alert',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#alertBtn').click()

        cy.on('window:alert',(text)=>{
            expect(text).to.eq('I am an alert box!')
            return true;
        })
    })

    it('test automation confirm alert',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#confirmBtn').click()

        cy.on('window:confirm',(text)=>{
            expect(text).to.eq('Press a button!')
            return false;
            
        })
        cy.contains('You pressed Cancel!').should('be.visible')
    })

    it.only('test automation prompt alert',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        
        cy.window().then((win)=>{

            //cy.stub(win,'prompt').returns('type text here'); --to type text
            cy.stub(win,'prompt').returns(null);    // to click cancel
        })

        cy.get('#promptBtn').click()
            
        cy.contains('User cancelled the prompt').should('be.visible')
    })


})