// describe('template spec', ()=>{

//     it('passes',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#checkBoxOption1').check().should('be.checked');
//         cy.get('#checkBoxOption2').check().should('be.checked');
//         cy.get('#checkBoxOption3').check().should('be.checked');

//     })



// })  

// describe('to checkbox' ,()=>{

//     it('dropdown',()=>{

        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#dropdown-class-example').select('option2').should('be.visible')

// //     })

// // })

// describe ('suggestion dropdown box',()=>{

//     it ('checking',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('input#autocomplete').type('vi')
//         cy.get('.ui-menu-item').each(($country) =>{
//             if($country.text().includes('Bolivia')){
//                 cy.wrap($country).click({force:true})
//             }
             
//         })
//     })

// })

// describe ('suggestion dropdown box',()=>{

//     it ('checking',()=>{

//         // cy.on('uncaught:exception', () => false)

//         cy.visit('https://www.flipkart.com/',) //{failOnStatusCode: false}
//         cy.get('input.Pke_EE').type('wa')
//         cy.get('_3D0G9a').each(($wardrobe)=>{
//             if($wardrobe.text().includes ('wardrobe')){
//                 cy.wrap($wardrobe).click({force:true})
//             }
//         })

//     })


// // })
// describe ('suggestion dropdown box', ()=>{
//     it('checking',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('input#autocomplete').type('ar')
//         cy.get('.ui-menu-item').each(($Argentina)=>{
//             if($Argentina.text().includes('Argentina')){
//                 cy.wrap($Argentina).click()
        
//             }
//         })
        
//         cy.get('.radioButton').eq(0).should('be.checked')

        
//     })
// })