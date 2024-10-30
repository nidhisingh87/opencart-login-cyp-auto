describe('Login Functionality validation of Open Cart Demo website', ()=>{ // Test Scenario   
    
    it('TC02 - Login with invalid credentials', function(){      // Test Case

        cy.visit({
            url:'https://demo.opencart.com/en-gb?route=account/login'  // Application's login page url
        
        })

        cy.get('#form-login > h2').should('be.visible');  // Validation of Login page

        cy.wait (1000);

        cy.get('#input-email').type('nidhi@stockholmitacademy.org');    // Entering Valid user email
        cy.get('#input-password').type('101010', {log:false});    //Entering Invalid password
        cy.get('[type="submit"]').click();     // click on login button 

        cy.wait (1000);

        cy.get('.alert').should('contain', 'Warning'); //Validation of warning alert
    
    })
})
