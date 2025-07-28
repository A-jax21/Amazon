class Orangehrm{

    visitpage(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    username () {

        cy.get('[name="username"]').type('Admin')

    }

    password () {

        cy.get('[name="password"]').type('admin123')

    }

    clickbutton () {

        cy.get('[type="submit"]').click()


    }



}

export default Orangehrm;