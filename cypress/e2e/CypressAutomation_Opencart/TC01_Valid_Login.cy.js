describe('Login Functionality validation of Open Cart Demo website', ()=>{    // Test Scenario
    
    it('TC01 - Login with valid credentials', function(){    //Test Case
 
        cy.visit({
            url:'https://demo.opencart.com/en-gb?route=account/login'  // Application's login page url
        })

        cy.get('#form-login > h2').should('be.visible');  // Validation of Login page

        cy.wait (1000);

        cy.get('#input-email').type('nidhi@stockholmitacademy.org');  // Entering Valid user email
        cy.get('#input-password').type('12345', {log:false});  //Entering Valid password
        cy.get('[type="submit"]').click(); // click on login button 

        cy.get('.img-fluid').should('be.visible'); // Validation of home page of the application
    
    })
})
