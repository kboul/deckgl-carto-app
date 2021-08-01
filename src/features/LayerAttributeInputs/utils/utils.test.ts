import { hexColors, inputNames, rgbColors } from '../../../constants';
import {
  getStrokeSizeOutlineColor,
  hexToRgb,
  inputNameToLabel,
  invalidStrokeSize,
  rgbToHex
} from './utils';

describe('hexToRgb', () => {
  test('converts a hex value to an rgb value', () => {
    const output = hexToRgb(hexColors.white);
    expect(output).toEqual(rgbColors.white);
  });
});

describe('rgbToHex', () => {
  test('converts an rgb value to a hex value', () => {
    const output = rgbToHex(rgbColors.white);
    expect(output).toEqual(hexColors.white);
  });
});

describe('inputNameToLabel', () => {
  test('returns the label splitted on first capital letter & converted to lower case with an empty space in the end', () => {
    const output = inputNameToLabel(inputNames.strokeColor);
    expect(output).toBe('Stroke color ');
  });
});

describe('invalidStrokeSize', () => {
  test('returns true if stroke size value is bigger than 9 or smaller than 0', () => {
    const output = invalidStrokeSize(-1);
    expect(output).toBeTruthy();
  });

  test('returns false if stroke size value is smaller than 9 or bigger than 0', () => {
    const output = invalidStrokeSize(8);
    expect(output).toBeFalsy();
  });
});

describe('getStrokeSizeOutlineColor', () => {
  test('returns red outline color if strokeSize is smaller than 0', () => {
    const output = getStrokeSizeOutlineColor(-1);
    expect(output).toBe(hexColors.red);
  });

  test('returns red outline color if strokeSize is bigger than 9', () => {
    const output = getStrokeSizeOutlineColor(10);
    expect(output).toBe(hexColors.red);
  });

  test('returns white outline color if strokeSize is bigger than -1 and smaller than 9', () => {
    const output = getStrokeSizeOutlineColor(2);
    expect(output).toBe(hexColors.white);
  });
});
