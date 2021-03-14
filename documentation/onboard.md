# Onboarding Process

Watch team video for most of the onboarding process information. 

## Generating code coverage
While in the ./timer directory of the repo, run `npm test` to run jest tests and generate jest coverage. After this, instrument the code by using the command `npm run instrument`.
Now, in the file ./timer/index.html, scroll down to the script tag and change the source to ./instrumented/index.js. Revert this back to ./index.js after generating coverage. To generate
Cypress coverage, open cypress using `npx cypress open` and then run tests. Once finished, close cypress and run the command `npx run merge`. This will merge the jest
coverage from 'jest-coverage directory' and the cypress coverage from 'cypress-coverage' directory all into one coverage report in the 'coverage' directory. Now, the coverage
report at ./coverage/index.html is ready to be pushed. 
