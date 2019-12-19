## About the app

This app has been deployed with circleci for continous integration/continous delivery

## Installing required dependencies

To install the app, you would require the following dependencies:
1. Node.js - If you do not have it please download it from https://nodejs.org/en/

## Files you need to create

Create a `cypress.env.json` file in the root directory of the project and add the `baseUrl` and `backendUrl` to test cypress locally.

```json
{
  "baseUrl": "http://localhost:3000",
  "backendUrl": "http://localhost:3005"
}
```

Create a `.env` file in the root directory of the project folder and add the `REACT_APP_URL`. Please find the necessary API keys for the `REACT_APP_EMAIL_SERVICE_ID`, `REACT_APP_EMAIL_TEMPLATE_ID` and `REACT_APP_EMAIL_USER_ID` in the txt file accompanied with this zip.

```
REACT_APP_URL = "http://localhost:3005"
REACT_APP_EMAIL_SERVICE_ID=
REACT_APP_EMAIL_TEMPLATE_ID=
REACT_APP_EMAIL_USER_ID=
```

## Running the app

Before you start the frontend application, please first start the backend application. After which you can do the following steps:

1. Unzip the code to a folder on your computer
2. Go to the project's folder in your command line and run the following 2 commands:

Install dependencies:
```
npm install
```

Starting the application:

```
npm start
```

## Running the unit and integration tests

To run the tests

```
npm test
```

To view the unit test coverage

```
npm run test:coverage
```

## Running the End to end UI tests

Enter the following command in your terminal

```
npm run cy:open
```
When Cypress opens, please run the specification `booking.spec.js` found in the path `./cypress/integration/booking.spec.js`