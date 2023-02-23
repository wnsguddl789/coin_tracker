import { useState } from 'react';

import Api from '@/configs/api';
import { Coin } from '../types/coin';
import { useQuery } from '@tanstack/react-query';

export type CoinListViewModel = {
  coinList?: Coin[];
  isFetching: boolean;
  isLoading: boolean;
};

export const useCoinDetailViewModel = (api: Api, coinId?: string) => {
  const {
    data: coinList,
    isLoading,
    isFetching,
  } = useQuery<Coin[]>(['coinList'], () => api.query<Coin[]>({ url: '/coins', options: { method: 'GET' } }));
  console.log(coinId);
  return {
    coinList,
    isFetching,
    isLoading,
  };
};
