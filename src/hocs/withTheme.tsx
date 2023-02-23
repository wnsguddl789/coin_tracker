import { ComponentType, useEffect } from 'react';

import ThemeProvider from '@/themes/ThemeProvider';
import { ThemeType } from '@themes/ThemeTypes';

import useThemeViewModel from '@/modules/theme/viewModels/useThemeViewModel';

export type withModalProps = { themeMode: ThemeType };

const withTheme = (Component: ComponentType) => () => {
  const { setTheme } = useThemeViewModel();

  useEffect(() => {
    const theme = localStorage.getItem('Theme') as ThemeType | undefined;

    if (!theme) return;

    setTheme(theme);
  }, []);

  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

export default withTheme;
