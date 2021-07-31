import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '.';
import { inputNames } from '../constants';

const blueColor = '#0000ff';

beforeEach(() => render(<App />));

test('polygon color updates when user changes its value', () => {
  const input = screen.getByLabelText(inputNames.polygonColor);

  fireEvent.change(input, { target: { value: blueColor } });
  expect(input).toHaveValue(blueColor);
});

test('stroke color updates when user changes its value', () => {
  const input = screen.getByLabelText(inputNames.strokeColor);

  fireEvent.change(input, { target: { value: blueColor } });
  expect(input).toHaveValue(blueColor);
});

test('stroke size updates when user changes its value', () => {
  const input = screen.getByLabelText(inputNames.strokeSize);
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue(1);

  userEvent.clear(input);
  userEvent.type(input, '2');
  expect(input).toHaveValue(2);

  userEvent.clear(input);
  userEvent.type(input, '0');
  expect(input).toHaveValue(0);
});
