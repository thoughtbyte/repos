# Repos

This project uses react, octokit, react-markdown, dateformat, lodash.omit, and the `useAsyncFn` hook from react-use.

- Users can add a repo to the list by entering a repo owner and a repo name.

- All added repos will be marked as newly updated. Expanding the release notes details will remove the "NEW UPDATE" flash.

- Refreshing the page will load the repos, fetch their data, and display "NEW UPDATE" flash for anything that has been updated (i.e. has a new release) since it was last loaded. Clicking on the relese notes removes this flash, as it did for newly added repos.

- Built for desktop and mobile views.

- When the app loads there is a loading state, though it will be a quick flash with a good internet connection and just a few repos. When you addm repo, the loading state is the disabled button. Error message flash appears if there is an error retrieving repos.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
