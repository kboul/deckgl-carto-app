import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import {
  CartoLayer,
  setDefaultCredentials,
  API_VERSIONS
} from '@deck.gl/carto';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapProps from './model';
import { getCartoLayerQuery } from './utils';
import * as consts from './constants';

setDefaultCredentials({
  apiVersion: API_VERSIONS.V2,
  username: 'public',
  apiKey: 'default_public'
});

export default function Map({
  polygonColor,
  selectedContinents,
  strokeColor,
  strokeSize
}: MapProps) {
  const cartoLayerQuery = getCartoLayerQuery(selectedContinents);

  const layer = new CartoLayer({
    data: cartoLayerQuery,
    getFillColor: polygonColor,
    getLineColor: strokeColor,
    lineWidthMinPixels: strokeSize,
    ...consts.cartoLayerOptions
  });

  return (
    <DeckGL
      controller
      height={consts.mapHeight}
      initialViewState={consts.initialViewState}
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
}
