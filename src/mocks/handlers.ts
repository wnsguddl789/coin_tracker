import { rest } from 'msw'

import coinList from './data.json'
import { EndPoint } from '@constants/key'

const COIN_LIST = coinList.map((coin, index) => ({ ...coin, index }))

export const handlers = [
	rest.get(EndPoint.fetchCoinList, (req, res, ctx) => {
		console.log(req)
		return res(ctx.status(200), ctx.json(COIN_LIST))
	}),

	// rest.get(EndPoint.fetchCoinDetail, (req, res, ctx) => {
	// 	return res(ctx.status(200), ctx.json(COIN_LIST))
	// }),
]
