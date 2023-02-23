import withApiInstance from '@/hocs/withApiInstance';
import { CoinDetailView, useCoinDetailViewModel } from '@modules/coin';
import Api from '@/configs/api';

import { useParams } from 'react-router-dom';

interface Props {
  api: Api;
}

type CoinId = {
  coinId: string;
};

const CoinDetailPage = withApiInstance(({ api }: Props) => {
  const { coinId } = useParams<CoinId>();
  const viewModel = useCoinDetailViewModel(api, coinId);
  return <CoinDetailView viewModel={viewModel} />;
});

export default CoinDetailPage;
