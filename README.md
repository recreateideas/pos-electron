# Electron Pos

A responsive react + electron + express pos system.

## Installation

```bash
git clone https://github.com/recreateideas/pos-electron.git
```

## Start up

```bash
npm run electron:bootstrap
```

This will install all dependencies, build the UI and start the app.

## Requirements:

-   Create a React application using the Electron desktop application framework (https://www.electronjs.org/).
-   There must are a product, an order summary section and a pay button.
-   The "Order" column will be a list in which you will need to keep the application state.
-   On the Node side of the Electron framework, you will need to create a REST API endpoint that is exposed to the React UI.
-   When the "Pay" button is clicked, the order will be sent to an API endpoint using HTTP POST. This endpoint will write to a file with the JSON request.

Extras:

-   Products are fetched from the backend, simulating a db query or a 3rd party API integration
-   100% test coverage for data-service
-   Services health checks. Checks are run before the UI is rendered
-   App setup with redux. TO prep for scalability and to handle all API requests consistently with redux actions.
-   The codebase has been organised to prepare for a monorepo and to support microservice architecture
-   Ui is responsive (somewhat)

What's missing

-   Request validation in backend
-   Some error handling in UI (Error boundaries and invalid API responses)
-   Properly devide redux store into slices
-   Test coverage in UI
-   Electron-builder is not configured

[MIT](https://choosealicense.com/licenses/mit/)
