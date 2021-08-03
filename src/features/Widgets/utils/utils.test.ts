import { countries, population } from '../../../tests/data';
import {
  arrObjsMaxAttrValue,
  getContinentPopulation,
  getSelectedContinentsNumber
} from './utils';

describe('arrObjsMaxAttrValue', () => {
  test('returns the max attribute value from an array of objects', () => {
    const output = arrObjsMaxAttrValue(countries.rows, 'count');
    expect(output).toBe(54);
  });
});

describe('getSelectedContinentsNumber', () => {
  test('returns the number of selected continents when an array of one item is provided', () => {
    const output = getSelectedContinentsNumber(['Europe']);
    expect(output).toBe('7 Selected');
  });

  test('returns all selected when an empty array is provided', () => {
    const output = getSelectedContinentsNumber([]);
    expect(output).toBe('All Selected');
  });

  test('returns none selected when all contintents are included', () => {
    const output = getSelectedContinentsNumber(
      countries.rows.map(({ continent }) => continent)
    );
    expect(output).toBe('None Selected');
  });
});

describe('getContinentPopulation', () => {
  test('formats the given number when is billions', () => {
    const output = getContinentPopulation(population.rows, 'Asia');
    expect(output).toBe('4.1B');
  });

  test('formats the given number when is millions', () => {
    const output = getContinentPopulation(population.rows, 'Africa');
    expect(output).toBe('994.7M');
  });

  test('formats the given number when is thousands', () => {
    const output = getContinentPopulation(population.rows, 'Antarctica');
    expect(output).toBe('3.8k');
  });
});
