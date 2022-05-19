


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


          it('Verify if a user cannot log in with an invalid username and a valid password', function()
          {
              cy.visit('https://testvillage.letsventure.com/')
              cy.get('.signin').click()
              cy.get('#email').type('annvin.lv@grepd', {force:true})
              cy.get('#password').type('Asha@7475', {force:true})
              cy.get('.custom_sign_in').find('#sign_in_submit').click({force:true})
              
              
              Cypress.on('uncaught:exception', (err, runnable) => {
                  //returning false here prevents Cypress from
                   //failing the test
                  return false
              })
        })
        it('Verify if a user cannot log in with a valid username and an invalid password.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.get('#email').type('annvin.lv@grepdigital.com', {force:true})
            cy.get('#password').type('Asha', {force:true})
            cy.get('.custom_sign_in').find('#sign_in_submit').click({force:true})
            
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        it('Verify the login page for both, when the field is blank and the Sign-in button is clicked.', function()
        {
            cy.visit('https://testvillage.letsventure.com/')
            cy.get('.signin').click()
            cy.get('.custom_sign_in').find('#sign_in_submit').click({force:true})
            
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                //returning false here prevents Cypress from
                 //failing the test
                return false
            })
        })
        

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