import { Container } from '../components';
import { CoinListViewModel } from '../viewModels';

import { Link } from 'react-router-dom';

interface Props {
  viewModel: CoinListViewModel;
}

export const CoinListView = ({ viewModel }: Props) => {
  const { coinList, isLoading } = viewModel;
  return (
    <Container>
      <ul>
        {coinList?.map((coin) => (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
              <img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></img>
              {coin.name} &rarr;
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  );
};
