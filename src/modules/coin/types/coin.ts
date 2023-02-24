export type Coin = {
	id: string
	name: string
	symbol: string
	rank: number
	is_new: boolean
	is_active: boolean
	type: string
}

export type CoinHistory = {
	close: number
	high: number
	low: number
	market_cap: number
	open: number
	time_close: string
	time_open: string
	volume: number
}
