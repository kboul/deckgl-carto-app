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

const initialCartoLayerQuery = 'SELECT * FROM ne_50m_admin_0_countries';

export {
  cartoLayerOptions,
  initialCartoLayerQuery,
  mapboxApiAccessToken,
  mapHeight,
  mapWidth,
  tileLayer
};
