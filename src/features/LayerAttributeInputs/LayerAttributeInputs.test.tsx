import { render, screen } from '@testing-library/react';

import LayerAttributeInputs from '.';
import { rgbToHex } from './utils';
import { initialLayerAttributes, inputNames } from '../../constants';

beforeEach(() => {
  render(
    <LayerAttributeInputs
      polygonColor={initialLayerAttributes.polygonColor}
      setValue={jest.fn()}
      strokeColor={initialLayerAttributes.strokeColor}
      strokeSize={initialLayerAttributes.strokeSize}
    />
  );
});

describe('polygon color', () => {
  test('label appears on the UI', () => {
    const label = screen.getByText('Polygon color');
    expect(label).toBeInTheDocument();
  });

  test('input appears on the UI & has correct initial value', () => {
    const input = screen.getByLabelText(inputNames.polygonColor);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(rgbToHex(initialLayerAttributes.polygonColor));
  });
});

describe('stroke color', () => {
  test('label appears on the UI', () => {
    const input = screen.getByLabelText(inputNames.strokeColor);
    expect(input).toBeInTheDocument();
  });

  test('input appears on the UI & has correct initial value', () => {
    const input = screen.getByLabelText(inputNames.strokeColor);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(rgbToHex(initialLayerAttributes.strokeColor));
  });
});

describe('stroke size', () => {
  test('label appears on the UI', () => {
    const label = screen.getByText('Stroke size');
    expect(label).toBeInTheDocument();
  });

  test('input appears on the UI & has correct initial value', () => {
    const input = screen.getByLabelText(inputNames.strokeSize);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(initialLayerAttributes.strokeSize);
  });
});

test('line breaker appears on the UI', () => {
  const hr = screen.getByRole('separator');
  expect(hr).toBeInTheDocument();
});
