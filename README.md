# Deck-gl Carto App

An app with the new @deck.gl/carto module written in React, Typescript & Sass without a css framework that allows the user to interact with the map by changing several
map layer attributes. The map loads with all continent countries as a geojson and allows the user to change polygons' color, stroke size and stroke color. It also provides all countries geographical information per continent such as number of countries and population per continent.

## Create .env file with the mapbox token

The app uses mapbox which requires a unique token for each user to be able to use it.
This token is stored in a file which is not included in the current app's github repo.
Therefore, you need to create a .env file in the project's root directory which will contain mapboxtoken as an env variable. So, create the file and define that variable like in the example below

```
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

and you will be able to run the app without getting the mapbox token error on the console.

## Run the project

clone the project

select master branch

Navigate to the root folder:

```
npm install
```

```
npm start
```

browser listens to [http://localhost:3000](http://localhost:3000) as default port.

## Test the project

```
npm test
```

## Get project's test coverage

```
npm run test:coverage
```
