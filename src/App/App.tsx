import { useState } from 'react';

import { Map, LayerAttributeInputs, Widgets } from '../features';
import { initialState } from './constants';
import styles from './styles.module.sass';

export default function App() {
  const [state, setState] = useState(initialState);

  const setValue = (field: string, value: any) =>
    setState(prevState => ({ ...prevState, [field]: value }));

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <Map {...state} />
      </div>
      <div className={styles.widgetsContainer}>
        <LayerAttributeInputs setValue={setValue} {...state} />
        <Widgets
          selectedContinents={state.selectedContinents}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
