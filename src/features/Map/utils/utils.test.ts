import { initialCartoLayerQuery } from '../constants';
import { getCartoLayerQuery } from './utils';

describe('getCartoLayerQuery', () => {
  test('returns initial cartoLayer query if the arg array is empty', () => {
    const output = getCartoLayerQuery([]);
    expect(output).toBe(initialCartoLayerQuery);
  });

  test('returns cartoLayer query adjusted with the sql operation when the arg array is not empty', () => {
    const output = getCartoLayerQuery(['Africa', 'Europe']);
    expect(output).toBe(
      `${initialCartoLayerQuery} where continent not in ('Africa', 'Europe')`
    );
  });
});
