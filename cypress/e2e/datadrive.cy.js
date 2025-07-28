describe('data drive',()=>{

    before(()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    it('Getting a data from some other folder',()=>{


        cy.fixture('datadriven.json').then((userdata)=>{

            cy.get('[name="username"]').type(userdata.username)
            cy.get('[name="password"]').type(userdata.password)
            cy.get('[type="submit"]').click()

        })
        
    })
})