import { useMemo, ComponentType } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Api from '@/configs/api';

interface withApiInstanceProps {
  api: Api;
}

const BASE_URL = `http://localhost:5173`;

const withApiInstance = (Component: ComponentType<withApiInstanceProps>) => () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  const api = useMemo(() => Api.createInstance(BASE_URL), []);
  return (
    <QueryClientProvider client={queryClient}>
      <Component api={api} />
    </QueryClientProvider>
  );
};

export default withApiInstance;
