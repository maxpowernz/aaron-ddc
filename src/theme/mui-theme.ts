import { createTheme } from '@mui/material';
import { content, theme as tailwindTheme } from 'tailwind.config'; // just an alias for the tailwind.config.js
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

const tailwindConfig = resolveConfig({
  content,
  theme: tailwindTheme,
});

const { theme: { colors: tailwindColors = {} } = {} }: RecursiveKeyValuePair<string, any> = tailwindConfig ?? {};

export const theme = createTheme({
  typography: {
    fontSize: 14,
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
        disableRipple: true, // No more ripple, on the whole application 💣!
        sx: { textTransform: 'none', fontSize: 14 },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        sx: { textTransform: 'none', fontSize: 14, gap: '0.75em' },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        componentsProps: {
          typography: {
            sx: { fontSize: 14, fontWeight: 400, height: 42, paddingTop: 1.4 },
          },
        },
      },
    },
  },
});
