describe('Switch tab excercise',()=>{

    it('Switch tab',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="btn-style class1 class2"]').invoke('removeAttr','target').click()


    })
})