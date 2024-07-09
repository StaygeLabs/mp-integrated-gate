import { PropsWithChildren, useEffect, useState } from 'react';
import { useTailwind } from './useTailwind';

interface ThemeProviderProps {}

type MergeProps = PropsWithChildren<ThemeProviderProps>;

export function ThemeProvider(props: MergeProps) {
  const isDark = useDark();
  const themeType = useTailwind((state) => state.themeType);
  const themeClassName = themeType || (isDark ? 'dark' : '');

  useEffect(() => {
    if (themeClassName) {
      document.body.classList.add(themeClassName);
      return () => {
        document.body.classList.remove(themeClassName);
      };
    }
  }, [themeClassName]);

  return props.children;
}

ThemeProvider.defaultProps = {};

function useDark() {
  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return isDark;
}
