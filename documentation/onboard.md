# Onboarding Process

Watch team video for most of the onboarding process information. 

## Setup 
After first cloning our repo, please change your working directory to the timer directory. Then run the command `npm i` to install all dependencies. 

## Making changes
When making changes, first create a new branch on GitHub and make changes on this new branch. After finishing changes, push your changes to the new branch you created. Then create a pull request on GitHub. This will trigger the 3 GiHub actions, running our tests, linting, and generating JSDocs documentation. Once all three of these actions are finished, wait for the manager to approve and merge this pull request.  

## Writing tests
For Jest unit and DOM testing, files that are in the format *.test.js in the [timer](../timer) directory should be added or editted. For E2E Cypress tests, edit or add test files in the [cypress](../timer/cypress) directory. 

## Generating code coverage
While in the ./timer directory of the repo, run `npm test` to run jest tests and generate jest coverage. After this, instrument the code by using the command `npm run instrument`.
Now, in the file ./timer/index.html, scroll down to the script tag and change the source to ./instrumented/index.js. Revert this back to ./index.js after generating coverage. To generate
Cypress coverage, open cypress using `npx cypress open` and then run tests. Once finished, close cypress and run the command `npx run merge`. This will merge the jest
coverage from 'jest-coverage directory' and the cypress coverage from 'cypress-coverage' directory all into one coverage report in the 'coverage' directory. Now, the coverage
report at ./coverage/index.html is ready to be pushed. 

