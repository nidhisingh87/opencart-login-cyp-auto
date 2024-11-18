# Opencartdemo (Login) Auto

This repository conntains Cypress automation test for Opencartdemo website. The test cases are designed to cover and execute automation for positive, negative and exceptional usecases.

## Prerequisites

To setup the Cypress framework, install following 

- **Node.js** (v12 or higher)
- **Cypress** (install using npm)
- **Git** (For cloning the repository)

Above setup must be completed before executing the testcases

## Steps to follow:

1. **Clone the repository:**

   Open the bash in the terminal and execute below commands.

   ```bash
   git clone https://github.com/nidhisingh87/opencart-login-cyp-auto.git
   ```

   ```bash
   cd opencart-login-cyp-auto
   ```

2. **Install Cypress:**

   Install Cypress via node package manager (npm) using below command.

   ```bash
   npm install cypress --save-dev
   ```


3. **Open Cypress Test Runner:**

   Run the below command to open graphical user interface od Cypress to view and run tests.

   ```bash
   npx cypress open
   ```

**Follow the below steps to run the testcase in Cypress Runner**
 
- **Step 1.** Select the E2E Testing displayed on Cypress Runner welcome page.
- **Step 2.** Select the browser of your choice prompted by Cypress runner.
- **Step 3.** Click on "Start E2E Testing".
- **Step 4.** Select the desired testcase that you want to run from the displayed list, once selected, Cypress runner will start running the particular testcase.


4. **Alternatively, to run Tests in Headless Mode:**

   Execute below command:

   ```bash
   npx cypress run
   ```

## Viewing Test Reports

Cypress automatically generates reports for testrun, it contains both pass and fail results in green and red colour respectively.


## Manual testcases spreadsheet
Please refer below link to see detailed manual test cases:

https://docs.google.com/spreadsheets/d/1tn4PgSWLekm1zmh-psKwEHgVPzbwyAGT1oPt8j_ObDk/edit?usp=drive_link