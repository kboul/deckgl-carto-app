interface Countries {
  continent: string;
  count: number;
}

interface ContinentCountries {
  data: { rows: Array<Countries> };
}

export type { ContinentCountries, Countries };
