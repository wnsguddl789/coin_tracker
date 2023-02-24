import { Suspense } from 'react'

import withApiInstance from '@/hocs/withApiInstance'
import { CoinListView, useCoinListViewModel } from '@modules/coin'

import Api from '@/configs/api'

interface Props {
	api: Api
}

const BASE_URL = 'http://localhost:5173'

const CoinListPage = withApiInstance(({ api }: Props) => {
	const viewModel = useCoinListViewModel(api)

	return (
		<Suspense fallback={<span>...</span>}>
			<CoinListView viewModel={viewModel} />
		</Suspense>
	)
}, BASE_URL)

export default CoinListPage
