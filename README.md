# A search engine and review tool for restaurants in Amsterdam

A self-initiated React app for people to search and review restaurants in Amsterdam.

This app is to learn how to use front-end frameworks [React.js](https://github.com/facebookincubator/create-react-app), [React-Redux](https://github.com/reactjs/redux) and fetching data from [Google map](https://developers.google.com/maps/documentation/javascript/) and [Foursqaure](https://developer.foursquare.com/docs/api/venues/search) with RESTful API and [Sugeragent](https://www.npmjs.com/package/superagent).

<img width="1440" alt="screen shot 2018-03-06 at 13 38 00" src="https://user-images.githubusercontent.com/32798242/37032688-bcb90d6a-2143-11e8-83d0-2f6e0a1c405d.png">

## Key functions
1. Ability to create an account with a picture, username and location
2. Use Google Maps to let a user search a specific restaurant, either (a) through searching a location on the map or (b) through typing in a name and choosing from a list in a search box
3. Allow the user to write a review
4. Allow the user to add pictures to the review
5. Allow user to rate a specific restaurant on 1-5 scales based on specific topics
6. Responsive design down to mobile

## Steps to be taken
These are the steps I plan to work on this app:
1. Set up a Github project board to keep track of the development progress
2. Draw wireframes, sketch out how users navigate
3. Plan data models, database structure by understanding the impacts of user interaction
4. Fetch data from Google Map & Foursquare
5. Create seed data (TBC, necessary to POST user's review)
6. Set up authentication in the back-end
7. Set up a front-end for signing up, in, out and read data from the back-end
8. Tie front-end & back-end together by making buttons, URLs
9. Styling with the latest [material-ui@next](https://material-ui-next.com/)

## Work-in-progress
Started on 28th Feb:
* start working on steps 1 to 4 as mentioned above
* implemented Google Map API and fetched data from Foursquare API in JSON format 

Next step: decision to make if using purely Google/ Foursquare API or creating own API with seed data

## Running Locally
Make sure you have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed.

```bash
git clone git@github.com:fandytcc/foodie-react-app.git
cd foodie-react-app
yarn install
yarn start
```

## Related documentation
For more information about using React-Redux, ExpressJS and Mongoose, see these links:

* [React](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/)
* [Sugeragent](https://www.npmjs.com/package/superagent)
* [material-ui@next](https://material-ui-next.com/)
