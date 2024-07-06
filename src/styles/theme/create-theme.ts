import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

import { colorSchemes } from './color-schemes';
import type { Theme } from './types';
import { typography } from './typography';

declare module '@mui/material/styles/createPalette' {
  interface PaletteRange {
    50: string;
  }

  interface Palette {
    neutral: PaletteRange;
  }

  interface PaletteOptions {
    neutral?: PaletteRange;
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    level3: string;
  }
}

export function createTheme(): Theme {
  const theme = extendTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    colorSchemes,
    shape: { borderRadius: 8 },
    typography,
  });

  return theme;
}
