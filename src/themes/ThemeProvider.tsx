import React from 'react'

import { ThemeProvider as StyledThemeProvider } from '@emotion/react'
import { Theme } from '@themes/ThemeTypes'

interface Props {
	children: React.ReactNode
}

const theme: Theme = {
	DARK: {
		colors: {
			titleColor: '#121212',
			bgColor: '#b8b8b8',
		},
	},
	LIGHT: {
		colors: {
			titleColor: '#b8b8b8',
			bgColor: '#121212',
		},
	},
}

const ThemeProvider = ({ children }: Props) => {
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
