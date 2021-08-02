import { CartoLayerOptions, SetValue } from '../../models';

export default interface LayerAttributeInputsProps extends CartoLayerOptions {
  setValue: SetValue;
}
