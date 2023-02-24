import Api from '@/configs/api'
import { Coin } from '../types/coin'
import { useQuery } from '@tanstack/react-query'
import { Key, EndPoint } from '@constants/key'

export type CoinDetailViewModel = {
	coin?: Coin
	isFetching: boolean
	isLoading: boolean
}

export const useCoinDetailViewModel = (api: Api, coinId?: string) => {
	const {
		data: coin,
		isLoading,
		isFetching,
	} = useQuery<Coin[]>([Key.COINS], () =>
		api.query<Coin[]>({ url: EndPoint.fetchCoinDetail, options: { method: 'GET' } }),
	)
	return {
		coin,
		isFetching,
		isLoading,
	}
}
