import { rest } from 'msw';
import { baseUrl } from '../../constants';
import { countries } from '../data';

export default [
  rest.get(`${baseUrl.replace('?q=', '')}`, (req, res, ctx) =>
    res(ctx.json(countries))
  )
];
