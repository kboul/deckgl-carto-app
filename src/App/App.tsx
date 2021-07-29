import { useState } from 'react';

import { Map, LayerAttributeInputs } from '../features';
import { initialState } from './constants';
import styles from './styles.module.sass';

export default function App() {
  const viewState = { latitude: 0, longitude: 0, zoom: 2 };

  const [state, setState] = useState(initialState);

  const setValue = (field: string, value: any) =>
    setState(prevState => ({ ...prevState, [field]: value }));

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <Map viewState={viewState} {...state} />
      </div>
      <div className={styles.layerAttributesContainer}>
        <LayerAttributeInputs setValue={setValue} {...state} />
      </div>
    </div>
  );
}