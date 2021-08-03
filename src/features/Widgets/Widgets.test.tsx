import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import server from '../../tests/mocks/server';

import {
  countriesAlertMsg,
  countriesLoaderMsg,
  populationAlertMsg,
  populationLoaderMsg
} from './constants';

import Widgets from './Widgets';

test('error messages appear on the screen after continent countries & population request failure', async () => {
  render(<Widgets selectedContinents={[]} setValue={jest.fn()} />);

  // ovewrite default msw response for options endpoint with error response
  server.use(
    rest.get('*', (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ error: ['syntax error at or near '] }))
    )
  );

  const countriesAlert = await screen.findByText(countriesAlertMsg);
  expect(countriesAlert).toBeInTheDocument();

  const populationAlert = await screen.findByText(populationAlertMsg);
  expect(populationAlert).toBeInTheDocument();
});

test('loaders appear on the screen while data is fetching', () => {
  render(<Widgets selectedContinents={[]} setValue={jest.fn()} />);

  const countriesLoader = screen.getByText(countriesLoaderMsg);
  expect(countriesLoader).toBeInTheDocument();

  const populationLoader = screen.getByText(populationLoaderMsg);
  expect(populationLoader).toBeInTheDocument();
});
