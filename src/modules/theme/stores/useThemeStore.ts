import { create } from 'zustand';
import { ThemeType } from '@/themes/ThemeTypes';
import useThemeModel from '@/modules/theme/models/useThemeModel';

type ThemeModel = {
  setCurrentTheme: (theme: ThemeType) => void;

  getCurrentTheme: () => ThemeType;
};

const useThemeStore = create<ThemeModel>(() => ({
  setCurrentTheme: (theme: ThemeType) => useThemeModel.setState((state) => ({ ...state, theme })),

  getCurrentTheme: () => useThemeModel.getState().theme,
}));

export default useThemeStore;
