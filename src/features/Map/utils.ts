import { initialCartoLayerQuery } from './constants';

const getCartoLayerQuery = (selectedContinents: string[]) => {
  if (selectedContinents.length === 0) return initialCartoLayerQuery;

  return `${initialCartoLayerQuery} where continent not in ('${selectedContinents.join(
    "', '"
  )}')`;
};

export { getCartoLayerQuery };
