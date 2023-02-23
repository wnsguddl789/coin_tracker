import { ComponentType, useEffect } from "react";

import ThemeProvider from "@/themes/ThemeProvider";
import { ThemeType } from "@themes/ThemeTypes";

import { useThemeModel } from "@/hooks";

export type withModalProps = { themeMode: ThemeType };

const withTheme = (Component: ComponentType) => () => {
	const { setCurrentTheme } = useThemeModel();

	useEffect(() => {
		const theme = localStorage.getItem("Theme") as ThemeType | undefined;

		if (!theme) return;

		setCurrentTheme(theme);
	}, []);

	return (
		<ThemeProvider>
			<Component />
		</ThemeProvider>
	);
};

export default withTheme;
