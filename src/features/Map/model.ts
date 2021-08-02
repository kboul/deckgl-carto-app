import { CartoLayerOptions } from '../../models';

export default interface MapProps extends CartoLayerOptions {
  selectedContinents: string[];
}
