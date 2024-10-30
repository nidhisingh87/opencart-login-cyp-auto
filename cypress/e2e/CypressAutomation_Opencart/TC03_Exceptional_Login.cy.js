describe('Login Functionality validation of Open Cart Demo website', ()=>{ // Test Scenario   
    
    it('TC02 - Login with Empty credentials', function(){      // Test Case

        cy.visit({
            url:'https://demo.opencart.com/en-gb?route=account/login'  // Application's login page url
        
        })

        cy.get('#form-login > h2').should('be.visible');  // Validation of Login page

        cy.wait (1000);

        
        cy.get('[type="submit"]').click();     // Direct click on login button without entering anything in emailand password fields

        cy.wait (1000);

        cy.get('.alert').should('contain', 'Warning: No match for E-Mail Address and/or Password.'); //Validation of warning alert

    
    })
})
