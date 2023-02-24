import withTheme from '@hocs/withTheme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import RouterProvider from '@components/Router'

import { worker } from './mocks/worker'

worker.start()

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})

const App = withTheme(() => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider />
		</QueryClientProvider>
	)
})
export default App
