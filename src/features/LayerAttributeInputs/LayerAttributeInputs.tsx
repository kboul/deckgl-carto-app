import Input from '../../components/Input';
import LineBreaker from './LineBreaker';
import { ChangeEvent } from '../../models';
import LayerOptionsInputsProps from './model';
import { hexToRgb, rgbToHex } from './utils';
import styles from './styles.module.sass';

export default function LayerAttributeInputs({
  polygonColor,
  strokeColor,
  strokeSize,
  setValue
}: LayerOptionsInputsProps) {
  const handleInputChange = (field: string) => (e: ChangeEvent) => {
    const value =
      field === 'strokeSize' ? e.target.value : hexToRgb(e.target.value);
    setValue(field, value);
  };

  return (
    <div className={styles.container}>
      <h3>Change Map Layer Attributes</h3>

      <form className={styles.form}>
        <Input
          label="Polygon color "
          name="polygonColor"
          onChange={handleInputChange('polygonColor')}
          type="color"
          value={rgbToHex(polygonColor)}
        />

        <LineBreaker />

        <Input
          label="Stroke color "
          name="strokeColor"
          onChange={handleInputChange('strokeColor')}
          type="color"
          value={rgbToHex(strokeColor)}
        />

        <LineBreaker />

        <Input
          className={styles.strokeSize}
          label="Stroke size "
          maxLength={4}
          name="strokeSize"
          min={0}
          onChange={handleInputChange('strokeSize')}
          step="1"
          type="number"
          value={String(strokeSize)}
        />
      </form>
      <hr />
    </div>
  );
}
