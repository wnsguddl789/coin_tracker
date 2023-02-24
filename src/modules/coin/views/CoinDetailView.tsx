import { Container } from '../components'
import { CoinListViewModel } from '../viewModels'

interface Props {
	viewModel: CoinListViewModel
}

export const CoinDetailView = ({ viewModel }: Props) => {
	const {} = viewModel
	return <Container></Container>
}
