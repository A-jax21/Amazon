describe('Suggestion Drop Down box',()=>{

    it('Drop Down box',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input#autocomplete').type('aus')
        cy.get('.ui-menu-item').each(($countries)=>{
            if($countries.text().includes('Australia'))
                cy.wrap($countries).click()
        })


    })
})