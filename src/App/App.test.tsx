import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '.';
import { hexColors, inputNames } from '../constants';

beforeEach(() => render(<App />));

test('polygon color updates when user changes its value', () => {
  const input = screen.getByLabelText(inputNames.polygonColor);

  fireEvent.change(input, { target: { value: hexColors.blue } });
  expect(input).toHaveValue(hexColors.blue);
});

test('stroke color updates when user changes its value', () => {
  const input = screen.getByLabelText(inputNames.strokeColor);

  fireEvent.change(input, { target: { value: hexColors.blue } });
  expect(input).toHaveValue(hexColors.blue);
});

describe('stroke size', () => {
  let input: HTMLElement;

  beforeEach(() => {
    input = screen.getByLabelText(inputNames.strokeSize);
  });

  test('updates when user changes its value', () => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(1);

    userEvent.clear(input);
    userEvent.type(input, '2');
    expect(input).toHaveValue(2);

    userEvent.clear(input);
    userEvent.type(input, '0');
    expect(input).toHaveValue(0);
  });

  test('updates when user changes its value and displays an alert if value is invalid', () => {
    userEvent.clear(input);
    userEvent.type(input, '-2');
    expect(input).toHaveValue(-2);

    const alertMsg = 'Value cannot be less than 0';

    const alert = screen.getByText(alertMsg, {
      exact: false
    });
    expect(alert).toBeInTheDocument();

    userEvent.clear(input);
    userEvent.type(input, '5');

    const noAlert = screen.queryByText(alertMsg, {
      exact: false
    });
    expect(noAlert).not.toBeInTheDocument();
  });
});
