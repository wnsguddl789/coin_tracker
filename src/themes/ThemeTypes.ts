type Theme = {
	[key: string]: {
		colors: {
			titleColor: string;
			bgColor: string;
		};
	};
};

type ThemeType = "LIGHT" | "DARK";

export type { Theme, ThemeType };
