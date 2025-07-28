
import Orangehrm from "../fixtures/pageobj"

describe('Page Object Module',()=>{

    it('POM',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        let name = new Orangehrm();
        
        name.visitpage()
        name.username()
        name.password()
        name.clickbutton()


    })


 })