import Api from '@/configs/api'
import { Coin, CoinHistory } from '../types/coin'
import { useQueries } from '@tanstack/react-query'
import { Key, CoinPaprikaEndPoint } from '@constants/key'
import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')

export type CoinDetailViewModel = {
	coin?: Coin
	coinHistory?: CoinHistory[]
}

export const useCoinDetailViewModel = (api: Api, coinId?: string) => {
	const fetchCoinDetail = () => {
		return api.query<Coin>({
			url: `${CoinPaprikaEndPoint.fetchCoinDetail}/${coinId}`,
			options: { method: 'GET' },
		})
	}
	const fetchCoinHistory = () => {
		return api.query<CoinHistory[]>({
			url: `${CoinPaprikaEndPoint.fetchCoinDetail}/${coinId}/ohlcv/historical?start=${today}&end=${today}`,
			options: { method: 'GET' },
		})
	}

	const [{ data: coin }, { data: coinHistory }] = useQueries({
		queries: [
			{ queryKey: [Key.COIN], queryFn: fetchCoinDetail },
			{ queryKey: [Key.COIN_HISTORY], queryFn: fetchCoinHistory },
		],
	})

	return {
		coin,
		coinHistory,
	}
}
