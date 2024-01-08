# Getting Started
Clone the project, install node and npm (I recommend using nvm for version management).  
* `npm install` - install necessary deps  
* `npm start` - starts localhost dev server on port 3000  

Currently set up to pull cat images from https://thecatapi.com/. Get an API key and export it as an env (currently pulled in from src/utils/catImages.js as var `CAT_API_KEY`)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

