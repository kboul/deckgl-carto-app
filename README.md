# Deck-gl Carto App

An app with the new @deck.gl/carto module that allows the user to interact with the map by changing several
map layer attributes (polygon color, stroke size, stroke color) and also allows the extraction of all countries' geographical information per continent (number of countries, population per continent).

## Create .env file with the mapbox token

The app uses mapbox which requires a unique token for each user to be able to use it.
This token is stored in a file which is not included in the current app's github repo.
Therefore, you need to create a .env file in the project's root directory which will contain the env variable.

```
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

Define that variable like in the example above and you will be able to run the app.

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
