# TAP-TEMPO v1.0  (^=◕ᴥ◕=^)

##### Click or press a key in rythm while listening to music to get the current tempo of the song in BPM (Beats Per Minute). Useful for musicians, DJs and doctors too.
STACK : React 17 / Typescript / Enzyme / Sass

Catching key press or click events triggered in rythm is unaccurate in Javascript.
A simple approach for this application would be the following :
- Get current times (Date.now()) at first click then,
- Get current time at second click then,
- Compare the two values and do the BPM conversion

Another approach could consist in catching interval between click or key press events, but you can't relie on these APIs when looking for precise values: https://blog.bitsrc.io/how-to-get-an-accurate-setinterval-in-javascript-ca7623d1d26a

These approaches are unaccurate, even if we sum up many values and calculate the average.
The time elapsed between two regular key press (or click) events is not always the same for these reasons :
- Mouse and keyboards have specific latencies (https://docs.google.com/spreadsheets/d/1-QI7-LY9Ul_DsVE4ZOqBQxqqqqrdJ04Ite8IY3AQMds/edit#gid=0)
- Browser may encounter lag or latency
- User himself can be a little bit unaccurate as well

To solve this issue i used __linear regression__ arithmetics to "smooth" stored values average :
https://en.wikipedia.org/wiki/Linear_regression
https://fr.wikipedia.org/wiki/R%C3%A9gression_lin%C3%A9aire

Thanks to Oliver Jumpertz example of linear regression implementation :
https://blog.oliverjumpertz.dev/simple-linear-regression-theory-math-and-implementation-in-javascript

This tap tempo is probably the most accurate you could find online due to this peculiar implementation. Let me know if you find a better one (^=◕ᴥ◕=^)

Coming next in v1.1 : full unit testing

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
