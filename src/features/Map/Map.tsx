import { FC } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import {
  CartoLayer,
  setDefaultCredentials,
  API_VERSIONS
} from '@deck.gl/carto';

import MapProps from './model';
import * as consts from './constants';

setDefaultCredentials({
  apiVersion: API_VERSIONS.V2,
  username: 'public',
  apiKey: 'default_public'
});

const Map: FC<MapProps> = ({ polygonColor, strokeColor, viewState }) => {
  const layer = new CartoLayer({
    data: 'SELECT * FROM ne_50m_admin_0_countries',
    getFillColor: polygonColor,
    getLineColor: strokeColor,
    ...consts.cartoLayerOptions
  });

  return (
    <DeckGL
      controller
      height={consts.mapHeight}
      initialViewState={viewState}
      layers={[layer]}
      width={consts.mapWidth}>
      <StaticMap
        mapboxApiAccessToken={consts.mapboxApiAccessToken}
        mapStyle={consts.tileLayer}
        preventStyleDiffing
        reuseMaps
      />
    </DeckGL>
  );
};

export default Map;