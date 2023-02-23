import { create } from 'zustand';
import { ThemeType } from '@/themes/ThemeTypes';

type ThemeState = {
  theme: ThemeType;
};

const useThemeModel = create<ThemeState>(() => ({
  theme: 'LIGHT',
}));

export default useThemeModel;
