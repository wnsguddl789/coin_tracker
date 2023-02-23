import { ThemeType } from '@/themes/ThemeTypes';
import useTodoStore from '@/modules/theme/stores/useThemeStore';

const useThemeViewModel = () => {
  const themeStore = useTodoStore();

  return {
    theme: themeStore.getCurrentTheme(),
    setTheme: (theme: ThemeType) => themeStore.setCurrentTheme(theme),
  };
};

export default useThemeViewModel;
