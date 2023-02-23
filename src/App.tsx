import withTheme from "@hocs/withTheme";

import RouterProvider from "@components/Router";

import { useSetThemeState } from "./hooks";

const App = withTheme(() => {
	const themeModel = useSetThemeState();
	const theme = themeModel.getCurrentTheme();
	return <RouterProvider />;
});
export default App;
