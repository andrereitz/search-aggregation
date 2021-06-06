# Search Agreggation Test

This is a test project for search agreggation from Bing and Google.

## About Mock and SERPHouse (API)

This project is using "[SERPHouse](https://www.serphouse.com)" to serve the data. 
Since the account is a trial account there is a limit to resquests that can be made, and a time limit to use the API.
If the API is not available you can either create a free trial account and replace .env key with your own, or change the async operations to use the mock in `src\store\Search\Search.async.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.