import { createTheme } from '@mui/material';
import { content, theme as tailwindTheme } from 'tailwind.config'; // just an alias for the tailwind.config.js
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

const BASE_HEIGHT = 42;
const BASE_FONT = 14;

const tailwindConfig = resolveConfig({
  content,
  theme: tailwindTheme,
});

const { theme: { colors: tailwindColors = {} } = {} }: RecursiveKeyValuePair<string, never> = tailwindConfig ?? {};

export const theme = createTheme({
  typography: {
    fontSize: BASE_FONT,
  },
  palette: {
    primary: tailwindColors['primary'],
    secondary: tailwindColors['secondary'],
    error: tailwindColors['error'],
    text: tailwindColors['text'],
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        sx: { textTransform: 'none', fontSize: BASE_FONT },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: { textTransform: 'none', fontSize: BASE_FONT, paddingX: '0.75em' },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        componentsProps: {
          typography: {
            sx: { fontSize: BASE_FONT, fontWeight: 400, height: BASE_HEIGHT, paddingTop: 1.4 },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              marginTop: 8,
              maxHeight: BASE_HEIGHT * 7,
            },
          },
          MenuListProps: {
            style: {
              padding: 0,
            },
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: BASE_HEIGHT,
        },
      },
    },
  },
});
