describe('Functional Test Cases', function()
{

it('Verify the messages for invalid logins.', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
        
        
//valid email and invalid password
    
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email, {force:true})
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    cy.get('.error_notify').should('have.text','Please re-enter your password. The password you entered is incorrect. Forgot your password? Request a new one.')
    //invalid email and invalid password
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email1, {force:true})
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    cy.get('.error_notify').should('have.text','The email or password you entered is incorrect')
})
   

    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
         //failing the test
        return false
    
})
})
it('Verify if the password is visible to the user after clicking on the show password button.', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass1 = credentials.password1
        
        

    
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email, {force:true})
    cy.get('#password').type(credentials.password1, {force:true})
    cy.get('.field-icon > .fa').click({force:true})
    cy.get('#password').should('have.attr', 'type', 'text')
   
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    
})
   

    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
         //failing the test
        return false
    
})
})
it('Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass1 = credentials.password1
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email, {force:true})
    cy.get('#password').type(credentials.password1 , {force:true})
    cy.get('.custom_sign_in').find('#sign_in_submit').type(`{enter}`,{force:true})
    
    cy.wait(4000)
})
   

    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
         //failing the test
        return false
    
})
})
it('Verify if the data in the password field is visible as bullet signs.', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass1 = credentials.password1
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email, {force:true})
    cy.get('#password').type(credentials.password1, {force:true})
    cy.get('#password').should('have.attr', 'type', 'password')
    cy.wait(4000)
    
})
   

    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
         //failing the test
        return false
    
        })
    })
})

