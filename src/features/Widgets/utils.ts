const getSelectedContinentsNumber = (selectedContinents: string[]): string => {
  const selected = 'Selected';
  const selContLength = selectedContinents.length;
  const totalContinentsNumber = 8;

  if (selContLength === 0) return `All ${selected}`;

  return selContLength === totalContinentsNumber
    ? `None ${selected}`
    : `${totalContinentsNumber - selContLength} ${selected}`;
};

const arrObjsMaxAttrValue = (array: any[], property: string): number =>
  Math.max(...array.map(country => country[property]));

const getContinentPopulation = (
  population: any[],
  continent: string
): string => {
  const unformatedPopulation = population.find(
    ({ continent: popCont }) => popCont === continent
  ).sum;
  return numberFormatter(unformatedPopulation, 1);
};

// Source: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
const numberFormatter = (num: number, digits: number): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(({ value }) => num >= value);
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

export {
  arrObjsMaxAttrValue,
  getContinentPopulation,
  getSelectedContinentsNumber
};
