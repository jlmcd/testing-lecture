This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing Lecture

Lesson Flow:

1. First have everyone spin up a react app using `create-react-app`. Jest is installed as part of the dependencies included in create-react-app. 
    * If you were using jest in another setting, you would install it with the command:
        * `npm install --save-dev jest`.
        * This adds jest as a dependency for use in a development environment (dev dependency).
        * You would also need to add a script for running jest in the package.json file:
        ```json
        "scripts": {
          "test": "jest"
        }
        ```

2. Have the class run the built-in test with this command:
    * `npm run test`
    * _NOTE:_ Encourage students to display their terminal on the right side of vscode so scrolling to see things isn't an issue.
    * Jest looks for test files with the naming scheme `filename.test.js`
    * Jest displays the test suites (test files)
    * There are two modes of thought when it comes to organizing your test files:
        1. Putting all of your test code into a neatly organized `/tests` directory.
        2. Putting your test code next to the files they are testing.
    * We will be placing our test code in a `/tests` directory in the `src` folder.

3. Once everyone has jest running properly (the class should have one test passing by default), have them delete the App.test.js file. We will use another set of files to showcase the syntax and functionality of a jest test.

4. Create a `/tests` directory inside the `src` folder. This is where we will compile and organize our test files.
    * Inside the `/tests` folder, create a file called `functions.test.js`.
