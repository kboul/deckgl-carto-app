import { MAP_TYPES } from '@deck.gl/carto';

const mapboxApiAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const cartoLayerOptions = {
  type: MAP_TYPES.QUERY,
  pointRadiusMinPixels: 2
};

const mapHeight = '100%';

const mapWidth = '70%';

const tileLayer =
  'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

export {
  cartoLayerOptions,
  mapboxApiAccessToken,
  mapHeight,
  mapWidth,
  tileLayer
};
