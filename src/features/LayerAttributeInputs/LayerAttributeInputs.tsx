import Input from '../../components/Input';
import LineBreaker from './LineBreaker';
import { ChangeEvent } from '../../models';
import LayerOptionsInputsProps from './model';
import { hexToRgb, inputNameToLabel, rgbToHex } from './utils';
import { inputNames } from './constants';
import styles from './styles.module.sass';

export default function LayerAttributeInputs({
  polygonColor,
  setValue,
  strokeColor,
  strokeSize
}: LayerOptionsInputsProps) {
  const handleInputChange = (field: string) => (e: ChangeEvent) => {
    const newValue = e.target.value;
    const value =
      field === inputNames.strokeSize ? newValue : hexToRgb(newValue);
    setValue(field, value);
  };

  return (
    <div className={styles.container}>
      <h3>Change Map Layer Attributes</h3>

      <form className={styles.form}>
        <Input
          label={inputNameToLabel(inputNames.polygonColor)}
          name={inputNames.polygonColor}
          onChange={handleInputChange(inputNames.polygonColor)}
          type="color"
          value={rgbToHex(polygonColor)}
        />

        <LineBreaker />

        <Input
          label={inputNameToLabel(inputNames.strokeColor)}
          name={inputNames.strokeColor}
          onChange={handleInputChange(inputNames.strokeColor)}
          type="color"
          value={rgbToHex(strokeColor)}
        />

        <LineBreaker />

        <Input
          className={styles.strokeSize}
          label={inputNameToLabel(inputNames.strokeSize)}
          maxLength={1}
          min={0}
          max={9}
          name={inputNames.strokeSize}
          onChange={handleInputChange(inputNames.strokeSize)}
          step="1"
          type="number"
          value={String(strokeSize)}
        />
      </form>
      <hr />
    </div>
  );
}
