describe('drop down click button',()=>{
  it('drop down',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.visible')
    cy.get('#checkBoxOption2').check().should('be.visible')
    cy.get('#checkBoxOption3').check().should('be.visible')


  })


})