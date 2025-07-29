//Scenario 1 Ajay

describe('Hooks concept', ()=>{

    beforeEach(()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    })

    it('Hooks',()=>{

        cy.get('#checkBoxOption1').check().should('be.visible')
        cy.get('#checkBoxOption2').check().should('be.visible')
        cy.get('#checkBoxOption3').check().should('be.visible')

    })

    it('Switch tab', ()=>{

        cy.get('[class="btn-style class1 class2"]').invoke('removeAttr','target').click()


    })


})

//Scenario 1 Manoj

describe('Hooks concept', ()=>{

    beforeEach(()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    })

    it('Hooks',()=>{

        cy.get('#checkBoxOption1').check().should('be.visible')
        cy.get('#checkBoxOption2').check().should('be.visible')
        cy.get('#checkBoxOption3').check().should('be.visible')

    })

    it('Switch tab', ()=>{

        cy.get('[class="btn-style class1 class2"]').invoke('removeAttr','target').click()


    })


})