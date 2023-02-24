export const Key = {
	COINS: 'coins',
	COIN: 'coin',
	COIN_HISTORY: 'coinHistory',
} as const

export const MswEndPoint = {
	fetchCoinList: '/api/coins',
	fetchCoinDetail: '/api/coin/',
} as const

export const CoinPaprikaEndPoint = {
	fetchCoinDetail: '/coins',
} as const
