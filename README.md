## Installing required dependencies

To install the app, you would require the following dependencies:
1. Node.js - If you do not have it please download it from https://nodejs.org/en/
2. After which, please run the following command below

```
npm install
```

## Files you need to create

Create a `cypress.env.json` file in the root directory of the project and add the `baseUrl` and `backendUrl` to test cypress locally.

```json
{
  "baseUrl": "http://localhost:3000",
  "backendUrl": "http://localhost:3005"
}
```

Create a `.env` and add the `REACT_APP_URL`.

```
REACT_APP_URL = "http://localhost:3005"
```

## Running the app

Before you start the frontend application, please first start the backend application. After which you can do the following steps:

1. Unzip the code to a folder on your computer
2. Go to the project's folder in your command line and run the command below

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