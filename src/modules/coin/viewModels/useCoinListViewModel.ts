import Api from '@/configs/api'
import { Coin } from '../types/coin'
import { useQuery } from '@tanstack/react-query'
import { Key, EndPoint } from '@constants/key'

export type CoinListViewModel = {
	coinList?: Coin[]
	isFetching: boolean
	isLoading: boolean
}

export const useCoinListViewModel = (api: Api) => {
	const {
		data: coinList,
		isLoading,
		isFetching,
	} = useQuery<Coin[]>([Key.COINS], () =>
		api.query<Coin[]>({ url: EndPoint.fetchCoinList, options: { method: 'GET' } }),
	)

	return {
		coinList,
		isFetching,
		isLoading,
	}
}
