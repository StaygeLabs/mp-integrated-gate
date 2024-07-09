import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
  themeType?: 'dark' | 'matrix';
}

export const useTailwind = create(
  immer<State>((set) => ({
    themeType: undefined,
    selectThemeType: (themeType?: 'dark' | 'matrix') => {
      set(() => ({ themeType }));
    },
  })),
);
