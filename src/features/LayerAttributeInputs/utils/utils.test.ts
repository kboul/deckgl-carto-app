import { hexToRgb, inputNameToLabel, rgbToHex } from './utils';

const whiteRgb = [255, 255, 255];
const whiteHex = '#ffffff';

describe('hexToRgb', () => {
  test('returns the correct converted rgb from a hex value', () => {
    const output = hexToRgb(whiteHex);
    expect(output).toEqual(whiteRgb);
  });
});

describe('rgbToHex', () => {
  test('returns the same string with capital its first letter', () => {
    const output = rgbToHex(whiteRgb);
    expect(output).toEqual(whiteHex);
  });
});

describe('inputNameToLabel', () => {
  test('returns the label splitted with first letter capital, second to lower case with an empty space in the end', () => {
    const output = inputNameToLabel('strokeColor');
    expect(output).toBe('Stroke color ');
  });
});
