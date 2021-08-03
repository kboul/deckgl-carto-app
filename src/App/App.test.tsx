import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '.';
import { hexColors, inputNames } from '../constants';
import {
  countriesLoaderMsg,
  populationLoaderMsg
} from '../features/Widgets/constants';
import { countries } from '../tests/data';

beforeEach(() => render(<App />));

// async operations
test('input bars appear on the screen with correct countries number & population', async () => {
  const africa = countries.rows[0];
  const africaText = await screen.findByText(africa.continent.toUpperCase());
  expect(africaText).toBeInTheDocument();

  const africaBar = await screen.findByLabelText(`${africa.continent} bar`);
  expect(africaBar).toHaveValue(africa.count.toString());
  expect(africaBar).toHaveStyle({ opacity: '1' });

  const africaPopulation = await screen.findByLabelText(
    `${africa.continent} population`
  );
  expect(africaPopulation).toHaveTextContent('Population: 994.7M');

  // loaders should have been vanished
  const noCountriesLoader = screen.queryByText(countriesLoaderMsg);
  expect(noCountriesLoader).not.toBeInTheDocument();

  const noPopulationLoader = screen.queryByText(populationLoaderMsg);
  expect(noPopulationLoader).not.toBeInTheDocument();

  const antarctica = countries.rows[1];

  const antarcticaText = await screen.findByText(
    antarctica.continent.toUpperCase()
  );
  expect(antarcticaText).toBeInTheDocument();

  const antarcticaBar = await screen.findByLabelText(
    `${antarctica.continent} bar`
  );
  expect(antarcticaBar).toHaveValue(antarctica.count.toString());
  expect(antarcticaBar).toHaveStyle({ opacity: '1' });

  const antarcticaPopulation = await screen.findByLabelText(
    `${antarctica.continent} population`
  );
  expect(antarcticaPopulation).toHaveTextContent('Population: 3.8k');

  const asia = countries.rows[2];

  const asiaText = await screen.findByText(asia.continent.toUpperCase());
  expect(asiaText).toBeInTheDocument();

  const asiaBar = await screen.findByLabelText(`${asia.continent} bar`);
  expect(asiaBar).toHaveValue(asia.count.toString());
  expect(asiaBar).toHaveStyle({ opacity: '1' });

  const asiaPopulation = await screen.findByLabelText(
    `${asia.continent} population`
  );
  expect(asiaPopulation).toHaveTextContent('Population: 4.1B');

  const europe = countries.rows[3];

  const europeText = await screen.findByText(europe.continent.toUpperCase());
  expect(europeText).toBeInTheDocument();

  const europeBar = await screen.findByLabelText(`${europe.continent} bar`);
  expect(europeBar).toHaveValue(europe.count.toString());
  expect(europeBar).toHaveStyle({ opacity: '1' });

  const europePopulation = await screen.findByLabelText(
    `${europe.continent} population`
  );
  expect(europePopulation).toHaveTextContent('Population: 729M');

  const northAmerica = countries.rows[4];

  const northAmericaText = await screen.findByText(
    northAmerica.continent.toUpperCase()
  );
  expect(northAmericaText).toBeInTheDocument();

  const northAmericaBar = await screen.findByLabelText(
    `${northAmerica.continent} bar`
  );
  expect(northAmericaBar).toHaveValue(northAmerica.count.toString());
  expect(northAmericaBar).toHaveStyle({ opacity: '1' });

  const northAmericaPopulation = await screen.findByLabelText(
    `${northAmerica.continent} population`
  );
  expect(northAmericaPopulation).toHaveTextContent('Population: 540.8M');

  const oceania = countries.rows[5];

  const oceaniaText = await screen.findByText(oceania.continent.toUpperCase());
  expect(oceaniaText).toBeInTheDocument();

  const oceaniaBar = await screen.findByLabelText(`${oceania.continent} bar`);
  expect(oceaniaBar).toHaveValue(oceania.count.toString());
  expect(oceaniaBar).toHaveStyle({ opacity: '1' });

  const oceaniaPopulation = await screen.findByLabelText(
    `${oceania.continent} population`
  );
  expect(oceaniaPopulation).toHaveTextContent('Population: 34.8M');

  const sevenSeas = countries.rows[6];

  const sevenSeasText = await screen.findByText(
    sevenSeas.continent.toUpperCase()
  );
  expect(sevenSeasText).toBeInTheDocument();

  const sevenSeasBar = await screen.findByLabelText(
    `${sevenSeas.continent} bar`
  );
  expect(sevenSeasBar).toHaveValue(sevenSeas.count.toString());
  expect(sevenSeasBar).toHaveStyle({ opacity: '1' });

  const sevenSeasPopulation = await screen.findByLabelText(
    `${sevenSeas.continent} population`
  );
  expect(sevenSeasPopulation).toHaveTextContent('Population: 1.8M');

  const southAmerica = countries.rows[7];

  const southAmericaText = await screen.findByText(
    southAmerica.continent.toUpperCase()
  );
  expect(southAmericaText).toBeInTheDocument();

  const southAmericaBar = await screen.findByLabelText(
    `${southAmerica.continent} bar`
  );
  expect(southAmericaBar).toHaveValue(southAmerica.count.toString());
  expect(southAmericaBar).toHaveStyle({ opacity: '1' });

  fireEvent.change(southAmericaBar, { target: { value: '' } });
  expect(southAmericaBar).toHaveStyle({ opacity: '0.5' });

  fireEvent.change(southAmericaBar, { target: { value: '' } });
  expect(southAmericaBar).toHaveStyle({ opacity: '1' });

  const southAmericaPopulation = await screen.findByLabelText(
    `${southAmerica.continent} population`
  );
  expect(southAmericaPopulation).toHaveTextContent('Population: 394.4M');
});

// non async opearations
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
