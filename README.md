# A simple app to fetch data for restaurants in Amsterdam from external API

A self-initiated React app to excess and fetch data from Google & Foursquare APIs.

This app is to learn how to use front-end frameworks [React.js](https://github.com/facebookincubator/create-react-app), [React-Redux](https://github.com/reactjs/redux) and fetching data from [Google map](https://developers.google.com/maps/documentation/javascript/) and [Foursqaure](https://developer.foursquare.com/docs/api/venues/search) with RESTful API and [Sugeragent](https://www.npmjs.com/package/superagent).

<img width="1440" alt="screen shot 2018-03-06 at 13 38 00" src="https://user-images.githubusercontent.com/32798242/37032688-bcb90d6a-2143-11e8-83d0-2f6e0a1c405d.png">

## Key functions
1. Display location of restaurants in Amsterdam on Google Map
2. Display details of restaurants next to Google Map

## Steps to be taken
These are the steps I plan to work on this app:
1. Set up a Github project board to keep track of the development progress
2. Get Google API Key
3. Set up Google Map
4. Fetch restaurant data in JSON format from Foursquare API
5. Create markers to locate restaurants based on fetched latitudes and longitudes
6. Styling with the latest [material-ui@next](https://material-ui-next.com/)

## Work-in-progress
* Developing a full React app by creating own API to allow users post images, reviews and comments. This will be created in another repo (TBC).

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
