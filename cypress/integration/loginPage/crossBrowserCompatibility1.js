it('Verify if a user will be able to log in with a valid username and valid password', function()
    {
        cy.fixture('credentials.json').then((credentials) => {
            var em = credentials.email2
            var pass = credentials.password1
            
            
        cy.visit('https://testvillage.letsventure.com/')
        cy.get('.signin').click()
        cy.get('#email').type(credentials.email2, {force:true})
        cy.get('#password').type(credentials.password1, {force:true})
        cy.get('.custom_sign_in').find('#sign_in_submit').click({force:true})
        
        })
       
    })

