import { rest } from 'msw'

import coinList from './data.json'
import { MswEndPoint } from '@constants/key'

const COIN_LIST = coinList.map((coin, index) => ({ ...coin, index }))

export const handlers = [
	rest.get(MswEndPoint.fetchCoinList, (req, res, ctx) => {
		// console.log(req)
		return res(ctx.status(200), ctx.json(COIN_LIST))
	}),

	rest.get(`${MswEndPoint.fetchCoinDetail}/*`, (req, res, ctx) => {
		const coinId = req.params[0]

		const coin = COIN_LIST.find((_coin) => _coin.id === coinId)

		if (!coin) {
			return res(ctx.status(200), ctx.json({ message: '실패' }))
		}
		return res(ctx.status(200), ctx.json(coin))
	}),
]
