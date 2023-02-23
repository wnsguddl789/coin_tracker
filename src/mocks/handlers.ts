import { rest } from 'msw';

import coinList from './data.json';

const COIN_LIST = coinList.map((coin, index) => ({ ...coin, index }));

export const handlers = [
  rest.get('/coins', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(COIN_LIST));
  }),
];
