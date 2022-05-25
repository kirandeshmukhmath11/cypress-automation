
describe('Forgot Password Functionality', function()
{
        it('Verify the ‘Forgot Password’ functionality.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.wait(2000)
            cy.get('.btn-align').click({force:true})
            cy.wait(4000)
           
            
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify the message if the user is not registered on the platform.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.wait(2000)
            cy.get('#email').type('sebavince@gmail.com', {force:true})
            cy.get('.btn-align').click({force:true})
            cy.get('#email').type('sebavince@gmail.com', {force:true})

            cy.wait(40000)
            cy.get('.btn').click({force:true})
            cy.wait(2000)

           
            
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify the message if the user is registered on the platform but not Approved by the LV admins.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.wait(2000)
            cy.get('#email').type('ashavince@gmail.com', {force:true})
            
            cy.get('.btn-align').click({force:true})
            cy.get('#email').type('ashavince@gmail.com', {force:true})

            
            cy.wait(40000)
            cy.get('.btn').click({force:true})
            cy.wait(2000)

           
            
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify if after giving valid email the reset password link has to came to the users email id.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.wait(2000)
            cy.get('#email').type('annvin.lv@grepdigital.com', {force:true})
            cy.get('.btn-align').click({force:true})
            cy.get('#email').type('annvin.lv@grepdigital.com', {force:true})
            cy.wait(40000)
            cy.get('.btn').click({force:true})
            cy.wait(2000)
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify if a user can log in with a new password only after he/she has changed the password.', function()
        {
            cy.visit('https://testvillage.letsventure.com/signin')
            cy.get('.signin').click()
            cy.wait(2000)
            cy.get('#email').type('annvin.lv@grepdigital.com', {force:true})
            cy.get('#password').type('Annanjo@7197', {force:true})
            cy.get('.btn').click({force:true})
            cy.wait(4000)
            
           
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
    })