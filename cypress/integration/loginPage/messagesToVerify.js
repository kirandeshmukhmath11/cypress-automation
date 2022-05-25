describe('Messages to verify', function()
{

it('Verify the messages when password is invalid', function()
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
    cy.wait(4000)
})
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
     //failing the test
    return false
})
})
    it('Verify the messages when email is invalid', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
    //invalid email and invalid password
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email1, {force:true})
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    cy.get('.error_notify').should('have.text','The email or password you entered is incorrect')
    cy.wait(4000)
})
   

    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
         //failing the test
        return false
    
})
})

it('when the user is not approved but user has is registered', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
        var em2 = credentials.email2
        var em3 = credentials.email3
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email3, {force:true})
    cy.get('.btn-align').click({force:true})
    cy.wait(4000)
    cy.get('#email').type(credentials.email3, {force:true})
    cy.wait(100000)
    cy.get('.btn').click({force:true})
    cy.get('.alert > p').should('have.text','Your application is under review by the LV team.')
    cy.wait(4000)
})
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
     //failing the test
    return false
})
})
it('When the email id is not registered and user is doing forgot password', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
        var em2 = credentials.email2
        var em3 = credentials.email3
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    cy.get('#email').type(credentials.email2, {force:true})
    cy.get('.btn-align').click({force:true})
    cy.wait(4000)
    cy.get('#email').type(credentials.email2, {force:true})
    cy.wait(100000)
    cy.get('.btn').click({force:true})
    cy.get('.alert > p').invoke('text').then((text) => {
        expect(text.trim()).equal('This email id is not registered on LetsVenture. Please check your email address')
    cy.wait(4000)
})
    })
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
     //failing the test
    return false
})
})
it('Please fill out the field', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })

})
it('When the password reset link has been sent successfully', function () {
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
        var em2 = credentials.email2
        var em3 = credentials.email3
        cy.visit('https://testvillage.letsventure.com/forgot_password')

        cy.get('#email').type(credentials.email, { force: true })
        cy.wait(40000)
        cy.get('.btn').click({ force: true })
        cy.get('.alert > p').invoke('text').then((text) => {
            expect(text.trim()).equal('Check your mail! A password reset link has been shared.');
        })
    })
})

it('When the account is locked due to 5 invalid attempts', function()
{
    cy.fixture('credentials.json').then((credentials) => {
        var em = credentials.email
        var pass = credentials.password
        var em1 = credentials.email1
        
        
//valid email and invalid password
    
    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.signin').click()
    cy.wait(2000)
    //1st try
    cy.get('#email').type(credentials.email, {force:true})
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    //2nd try
    
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    //3rd try
    
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)
    //4th try 
    cy.get('#password').type(credentials.password, {force:true})
    cy.get('.btn').click({force:true})
    cy.wait(4000)

    cy.get('.error_notify').should('have.text','We have temporarily locked your account because of 5 failed login attempts. Please Click Here and we will send you link to unlock your account')
    cy.wait(4000)
    

})
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
     //failing the test
    return false
})
})
})
