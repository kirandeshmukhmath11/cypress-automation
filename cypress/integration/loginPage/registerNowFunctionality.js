

describe('Register Now Functionality', function()
{

        it('Verify the Register Now functionality if the button is clickable.', function()
        {
            cy.visit('https://testvillage.letsventure.com/signin')
            cy.get('.join-now-link').click({force:true})
           
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify if after clicking on the Register now it is taking the user to Join user Page.', function()
        {
            cy.visit('https://testvillage.letsventure.com/signin')
            cy.get('.join-now-link').click({force:true})
            cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')
            cy.wait(4000)
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify if the Join user page has two options to Sign up as Investor and Startup.', function()
        {
            cy.visit('https://testvillage.letsventure.com/signin')
            cy.get('.join-now-link').click({force:true})
            cy.get('.investor-signup-btn > .btn-lable').should('be.visible')
            cy.wait(4000)
            cy.get('.investor-signup-btn').click({force:true})
            cy.visit('https://testvillage.letsventure.com/join')
            cy.get('.startup-signup-btn > .btn-lable').should('be.visible')
            cy.wait(4000)
            cy.get('.startup-signup-btn').click({force:true})
            cy.visit('https://testvillage.letsventure.com/join')
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
    })