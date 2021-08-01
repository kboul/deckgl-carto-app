import { Alert, Input, LineBreaker } from '../../components';
import { ChangeEvent } from '../../models';
import LayerAttributeInputsProps from './model';
import {
  getStrokeSizeOutlineColor,
  hexToRgb,
  inputNameToLabel,
  invalidStrokeSize,
  rgbToHex
} from './utils';
import { inputNames } from '../../constants';
import styles from './styles.module.sass';

export default function LayerAttributeInputs({
  polygonColor,
  setValue,
  strokeColor,
  strokeSize
}: LayerAttributeInputsProps) {
  const handleInputChange = (field: string) => (e: ChangeEvent) => {
    const newValue = e.target.value;
    const value =
      field === inputNames.strokeSize ? newValue : hexToRgb(newValue);
    setValue(field, value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Change Map Layer Attributes</h3>

      <form className={styles.form}>
        <Input
          ariaLabel={inputNames.polygonColor}
          label={inputNameToLabel(inputNames.polygonColor)}
          name={inputNames.polygonColor}
          onChange={handleInputChange(inputNames.polygonColor)}
          type="color"
          value={rgbToHex(polygonColor)}
        />

        <LineBreaker />

        <Input
          ariaLabel={inputNames.strokeColor}
          label={inputNameToLabel(inputNames.strokeColor)}
          name={inputNames.strokeColor}
          onChange={handleInputChange(inputNames.strokeColor)}
          type="color"
          value={rgbToHex(strokeColor)}
        />

        <LineBreaker />

        <Input
          ariaLabel={inputNames.strokeSize}
          className={styles.strokeSize}
          label={inputNameToLabel(inputNames.strokeSize)}
          maxLength={1}
          min={0}
          max={9}
          name={inputNames.strokeSize}
          onChange={handleInputChange(inputNames.strokeSize)}
          step="1"
          style={{
            outlineColor: getStrokeSizeOutlineColor(strokeSize)
          }}
          type="number"
          value={String(strokeSize)}
        />

        <LineBreaker />

        {invalidStrokeSize(strokeSize) && (
          <Alert>Value cannot be less than 0 or higher than 9</Alert>
        )}
      </form>
      <hr />
    </div>
  );
}
