import { MAP_TYPES } from '@deck.gl/carto';

const mapboxApiAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const cartoLayerOptions = {
  type: MAP_TYPES.QUERY,
  pointRadiusMinPixels: 2,
  getLineColor: [0, 0, 0, 200],
  getFillColor: [238, 77, 90],
  lineWidthMinPixels: 1
};

const tileLayer =
  'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

export { cartoLayerOptions, mapboxApiAccessToken, tileLayer };
