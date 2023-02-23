import { Container } from '../components';
import { CoinListViewModel } from '../viewModels';

import { Link } from 'react-router-dom';

interface Props {
  viewModel: CoinListViewModel;
}

export const CoinDetailView = ({ viewModel }: Props) => {
  const {} = viewModel;
  return <Container></Container>;
};
