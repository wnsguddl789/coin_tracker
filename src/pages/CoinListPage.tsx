import withApiInstance from '@/hocs/withApiInstance'
import { CoinListView, useCoinListViewModel } from '@modules/coin'

import Api from '@/configs/api'

interface Props {
	api: Api
}

const CoinListPage = withApiInstance(({ api }: Props) => {
	const viewModel = useCoinListViewModel(api)

	return <CoinListView viewModel={viewModel} />
})

export default CoinListPage
