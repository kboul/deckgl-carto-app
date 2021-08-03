import { rest } from 'msw';

import { baseUrl } from '../../constants';
import { countries, population } from '../data';

const baseUrlWithoutQ = `${baseUrl.replace('?q=', '')}`;

export default [
  rest.get(baseUrlWithoutQ, (req, res, ctx) => res(ctx.json(countries))),
  rest.get(baseUrlWithoutQ, (req, res, ctx) => res(ctx.json(population)))
];
