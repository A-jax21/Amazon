// describe('Radio Button Practice',()=>{


//     // // it('Radio button',()=>{


//     //     cy.visit('https://testautomationpractice.blogspot.com/')
//     //     cy.get('#male').check().should('be.checked')
//     //     cy.get('#female').should('not.be.checked')
        
//     // })

// })

// describe('Drag and Drop',()=>{

//     it('drag and drop practice',()=>{

//         cy.visit('https://testautomationpractice.blogspot.com/')
//         cy.get('#draggable').drag('#droppable',{force:true})
//         cy.on('uncaught:exception', (err, runnable) => false)
        
//     })
// })

// describe('File Upload Practice',()=>{

//         it('File upload',()=>{

//             cy.visit('https://practice.expandtesting.com/upload')
//             cy.get('#fileInput').attachFile('Capture.JPG')
//             cy.get('#fileSubmit').click()
//             cy.contains('File Uploaded!').should('be.visible')

//             cy.on('uncaught:exception',(err,runnable)=>false)
    
            
//         })
//     })

// describe('File Upload Practice',()=>{

//     it('File upload',()=>{

//         cy.visit('')
        
        
//     })
// })

// describe('I frame task', ()=>{

//     it('Implementing i frame task', ()=>{

//         cy.visit('https://practice.expandtesting.com/iframe')
//         cy.frameLoaded('#email-subscribe')
//         cy.iframe().find('#btn-subscribe').should('have.text','Subscribe')


//     })
// })

// describe('table testing',()=>{

//     it('Table',()=>{

//         cy.visit('https://testautomationpractice.blogspot.com/')
//         cy.get('table>tbody>tr>td:nth-child(3)').each(($tabledata)=>{

//             if($tabledata.text().includes('JAVA')){
//                 cy.wrap($tabledata).then((getdata)=>{
//                     const expeactedtext= getdata.text()
//                     cy.log(expeactedtext)
//                 })
//             }
//         })
//     })
// })


// describe('Move hover',()=>{

//     it('practice',()=>{

//         cy.visit('https://practice-automation.com/hover/')
//         cy.get('#mouse_over').trigger('mouseover')
//         cy.contains('You did it!').should('be.visible')

//     })
// })

// describe('Title page',()=>{

//     it('Title',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.title().then((pageTitle) => {
//            var result=pageTitle;
//             cy.log(result)
//           });
//     })
// })


// describe ('Working with iframe', ()=>{

//     it ('iFrames',()=>{

//         cy.visit('https://ui.vision/demo/webtest/frames/')
//         cy.frameLoaded('frame[src="frame_2.html"]')
//         cy.iframe('frame[src="frame_2.html"]').find('[name="mytext2"]').type('jaya')
//     })
// })


// describe('JavaScript alert', ()=>{

//     it('Alert', ()=>{

//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('[onclick="jsAlert()"]').click()

//         cy.on('window:alert',(touch)=>{
//             expect(touch).to.contain('I am a JS Alert')
//         })

//         cy.get('#result').should('have.text', 'You successfully clicked an alert')
//     })
// })

// Confirmatin alert with ok and cancel button

// describe('Confirmation Alert', ()=>{
//     it('Alert',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('[onclick="jsConfirm()"]').click();

//         cy.on('window:confirm',(touch)=>{
//             expect(touch).to.contain('I am a JS Confirm')
//         })

//         cy.on('window:confirm',()=>false); // cypress closes alert window using cancel button

//         cy.on('window:confirm',()=>true); // cypress closes alert window using ok button

//         cy.get('#result').should('have.text', 'You clicked: Cancel')
//     })
// })


// describe('Promt Alert', ()=>{
//         it('Alert',()=>{
//             cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//             cy.window().then((win)=>{
//                 cy.stub(win,'prompt').returns('welcome')
//             })

//             cy.get('button[onclick="jsPrompt()"]').click()

//             // cy.on('window:prompt',()=>false);

//             cy.get('#result').should('have.text', 'You entered: welcome')
            
    
            
//         })
//     })

// describe('Authentication Alert', ()=>{
//     it('Alert',()=>{

//         //approach 1
//         cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username: "admin", password: "admin"}})
        
//         cy.get('.example').should('have.contain', 'Congratulations!')
        

        
//     })
// // })
// describe('Child tab', ()=>{
//     it('Child',()=>{

//         cy.visit('https://the-internet.herokuapp.com/windows')
//         cy.get('.example>a').invoke('removeAttr','target').click();

//         cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

//         cy.go('back');
//     })
// })

// describe('Child tab', ()=>{
//     it('Child',()=>{

//         cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
//         cy.get('#column-a').drag('#column-b',{force:true})
//     })
// })

// describe('dropdown',()=>{
//     it('dropdown',()=>{
//         cy.visit('https://practice.expandtesting.com/dropdown')
//         cy.get('.ui-autocomplete-input').type('alb');
//         cy.get('[class="ui-menu-item"]').each(($country)=>{

//             if($country.text().includes('Albania')){
//                 cy.wrap($country).click({force:true})
//             }
//         })
//     })
// })

describe('dropdown',()=>{
    it('dropdown',()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.get('[class="figure"]').eq(0).trigger('mouseover')
        cy.contains('name: user1').should('be.visible')

        
    })
})