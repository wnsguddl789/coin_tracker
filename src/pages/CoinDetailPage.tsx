import withApiInstance from '@/hocs/withApiInstance'
import { CoinDetailView, useCoinDetailViewModel } from '@modules/coin'
import Api from '@/configs/api'

import { useParams } from 'react-router-dom'

interface Props {
	api: Api
}

type CoinId = {
	coinId: string
}

const BASE_URL = `https://api.coinpaprika.com/v1`

const CoinDetailPage = withApiInstance(({ api }: Props) => {
	const { coinId } = useParams<CoinId>()
	const viewModel = useCoinDetailViewModel(api, coinId)
	return <CoinDetailView viewModel={viewModel} />
}, BASE_URL)

export default CoinDetailPage
