# BaSP M2023 - Week 14

This is the repository of the Week 14 project of the Become a Sofware Developer 2023 course by Radium Rocket.

This project consists of end-to-end (e2e) test automation using the WebdriverIO framework and Jasmine on the Swag Labs website.

The goal is to perform comprehensive automated testing to ensure software quality.

***

## Installation

1. Clone this repository on your local machine:
````bash
git clone https://github.com/araefe1992/BaSP-M2023-Week14.git
````
2. Navigate to the project directory:
````bash
cd BaSP-M2023-Week14
````
3. Install the dependencies:
````bash
npm install
````
***
## Configuration
Before running the tests, be sure to configure the following files:

### wdio.conf.js
This file contains the WebDriverIO configuration for running the tests. You can adjust the settings according to your needs.

### test/specs
This directory contains the test specification files. You can add, modify or delete files according to the scenarios you want to test.
***
## Running tests
To run all the tests, you can use the following command:
````bash
npm run wdio
````
To run standard user tests, you can use this command:
````bash
npx wdio wdio.conf.js --spec ./test/specs/standardUser.js
````
This will start the execution of the tests using WebDriverIO and display the results in the console.
***
## Author

Araceli Fernández
