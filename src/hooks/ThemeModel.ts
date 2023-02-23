import { create } from "zustand";
import { ThemeType } from "@/themes/ThemeTypes";

type ThemeModel = {
	setCurrentTheme: (theme: ThemeType) => void;

	getCurrentTheme: () => ThemeType;
};

type ThemeState = {
	theme: ThemeType;
};

const useThemeState = create<ThemeState>(() => ({
	theme: "LIGHT",
}));

export const useSetThemeState = create<ThemeModel>(() => ({
	setCurrentTheme: (theme: ThemeType) => useThemeState.setState((state) => ({ ...state, theme })),

	getCurrentTheme: () => useThemeState.getState().theme,
}));
