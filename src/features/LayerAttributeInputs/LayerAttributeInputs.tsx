import { ChangeEvent } from 'react';

import Input from '../../components/Input';
import LayerOptionsInputsProps from './model';
import { hexToRgb, rgbToHex } from './utils';
import styles from './styles.module.sass';

const LineBreaker = () => <p className={styles.lineBreaker} />;

export default function LayerOptionsInputs({
  polygonColor,
  strokeColor,
  setValue
}: LayerOptionsInputsProps) {
  return (
    <div className={styles.container}>
      <h3>Change Map Layer Attributes</h3>

      <form className={styles.form}>
        <Input
          id="polygonColor"
          label="Polygon color "
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('polygonColor', hexToRgb(e.target.value))
          }
          value={rgbToHex(polygonColor)}
        />

        <LineBreaker />

        <Input
          id="strokeColor"
          label="Stroke color "
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('strokeColor', hexToRgb(e.target.value))
          }
          value={rgbToHex(strokeColor)}
        />
      </form>
      <hr />
    </div>
  );
}
