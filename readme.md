Test Cases for Login Functionality for demo.opencart.com


----- Test Case 01 ------- (Positive Test Case)

TC_01 Login with Valid Credentials
----------------------------------

To Verify user should be able to login with valid credentials

Pre-conditions- User should be registered and should be on login page of the application.

Test Steps: 1. Navigate to https://demo.opencart.com/en-gb?route=account/login
            2. Enter valid login credentials (Valid email & Password)
            3. Click on the login button.

Test Data: nidhi@stockholmitacademy.org
           12345

Expected Results: User should be able to login and should navigate to home page of the application.

Actual Results: Sucessful login and User is navigated to home page to the application.

-----------------------------------------------------

----- Test Case 02 ------- (Negative Test Case)

TC_02 Login with Invalid Credentials
------------------------------------

To Validate the user login with invalid credentials

Pre-conditions- User should be registered and should be on login page of the application.

Test Steps: 1. Navigate to https://demo.opencart.com/en-gb?route=account/login
            2. Enter valid Email
            3. Enter invalid password.
            4. Click on the login button.

Test Data: nidhi@stockholmitacademy.org
           101010

Expected Results: User should not be allowed to login and navigate further.
                  Appropriate error message should be displayed.

Actual Results: Unsucessful login and Appropriate error message is displayed.

------------------------------------------------------

----- Test Case 03 ------- (Exception Test Case)

TC_03 Login with Empty Fields
-----------------------------

To Validate the user login with empty fields

Pre-conditions- User should be on login page of the application.

Test Steps: 1. Navigate to https://demo.opencart.com/en-gb?route=account/login
            2. Click on the login button without entering anything in the username and password fields.

Test Data: 

Expected Results: User should not be allowed to login and Appropriate error message should be displayed.

Actual Results: Unsucessful login and Appropriate error message is displayed.

----------------------------------------------------------------------  