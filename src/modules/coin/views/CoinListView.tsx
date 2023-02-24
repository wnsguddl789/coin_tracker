import { CoinListViewModel } from '../viewModels'

import { Link } from 'react-router-dom'

import { Container, Title, CoinList } from '../components/styles/CoinList.style'
interface Props {
	viewModel: CoinListViewModel
}

export const CoinListView = ({ viewModel }: Props) => (
	<Container>
		<Title>Top 100 Coin List</Title>
		<CoinList>
			{viewModel.coinList &&
				viewModel.coinList.map((coin) => (
					<Link key={coin.id} className="coin-wrapper" to={`/${coin.id}`}>
						{coin.name} &rarr;
					</Link>
				))}
		</CoinList>
	</Container>
)
