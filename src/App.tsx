import withTheme from '@hocs/withTheme';

import RouterProvider from '@components/Router';

import { worker } from './mocks/worker';

worker.start();

const App = withTheme(() => {
  return <RouterProvider />;
});
export default App;
