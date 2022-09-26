To setup clone the repo and install packages

### `npm install`

To run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To run the end to end tests

### `npx nightwatch tests/smoke.js --env chrome`

Assumptions Made

- No requirement of server component
- Prior to deployment there will be a build process to make the code production ready
  - obfuscate, minify, etc
- The links to bus route information should be sharable