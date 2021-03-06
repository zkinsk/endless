## Endless Technical Exercise - [Deployed on Heroku](https://endless-scz.herokuapp.com/)
- Technologies: 
  - React
  - JSX/HTML
  - Javascript
  - CSS (no precompiler)
  - Axios (for an API call)
- Mobile responsive using no 3rd party libraries, only flexbox and media queries
- Once the user decides to explore the page more deeply, Axios is used to hit an api to retrieve data and update the page. 
- A short timeout has been added to the api call to allow the loading animation to complete a cycle. 
- Because the scroll bars have been hidden an automatic scroll event takes the user to the new content. 
- Scroll event also reveals a CSS only "pseudo" parallax

### Please feel free to clone/download this repo to review my code
- This application was created from a foundation provided by create-react-app
- Once on your local machine run `npm install` to install all applicable dependencies from NPM (the main 3rd party dependency being Axios)
- Once all NPM dependencies have been installed, run `npm start` to spin up a local development server which should automatically start the app in localhost. 
- Once installed locally run `npm test` to see the results of the unit test for the function that sorts and parses the data from the API call
