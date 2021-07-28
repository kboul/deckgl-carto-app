import { FC } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import {
  CartoLayer,
  setDefaultCredentials,
  API_VERSIONS
} from '@deck.gl/carto';

import {
  cartoLayerOptions,
  mapboxApiAccessToken,
  tileLayer
} from './constants';
import MapProps from './model';

setDefaultCredentials({
  apiVersion: API_VERSIONS.V2,
  username: 'public',
  apiKey: 'default_public'
});

const Map: FC<MapProps> = ({ viewState }) => {
  const layer = new CartoLayer({
    data: 'SELECT * FROM ne_50m_admin_0_countries',
    ...cartoLayerOptions
  });

  return (
    <DeckGL
      controller
      height="100%"
      width="100%"
      initialViewState={viewState}
      layers={[layer]}>
      <StaticMap
        mapboxApiAccessToken={mapboxApiAccessToken}
        mapStyle={tileLayer}
        preventStyleDiffing
        reuseMaps
      />
    </DeckGL>
  );
};

export default Map;
