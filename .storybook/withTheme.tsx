import React from 'react';
import { ThemeProvider } from '../src/utils/tailwind/ThemeProvider';

export function withTheme(Story: any) {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
}
