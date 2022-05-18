const { find } = require("cypress/types/lodash")

describe('My first test', function()


{
    it('Verify if a user will be able to log in with a valid username and valid password', function()
    {
        cy.visit('https://testvillage.letsventure.com/')
        cy.get('.signin').click()
        cy.get('#email').type('annvin.lv@grepdigital.com', {force:true})
        cy.get('#password').type('Asha@7475', {force:true})
        cy.get('.custom_sign_in').find('#sign_in_submit').click({force:true})
        
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            //returning false here prevents Cypress from
             //failing the test
            return false
          })

    })
})


//{
    //it('visit sign up page', function()
    //{
        //cy.visit('https://testvillage.letsventure.com/')

        //cy.contains('Sign Up').click()
        //cy.url().should("include","join")
        
        //cy.get(".investor-signup-btn").click();
        //cy.url().should("include","investor")
        //cy.contains("Let’s Invest Together").click();
        //cy.url().should("include","preferences1")
        //cy.get('#react-select-20--value > .Select-placeholder').type('india')
       
        //Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            //return false
         // })
    //})
//})