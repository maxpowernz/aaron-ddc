import { createTheme } from '@mui/material';
import { content, theme as tailwindTheme } from 'tailwind.config'; // just an alias for the tailwind.config.js
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

const tailwindConfig = resolveConfig({
  content,
  theme: tailwindTheme,
});

const { theme: { colors: tailwindColors = {} } = {} }: RecursiveKeyValuePair<string, any> = tailwindConfig ?? {};

export interface IStyledInputProps {
  disabled?: boolean;
  focused?: boolean;
  error?: boolean | string | {};
}

export const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: tailwindColors['primary'],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: tailwindColors['secondary'],
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: tailwindColors['error'],
    },
    text: {
      primary: tailwindColors['default'],
      secondary: tailwindColors['base-1'],
      disabled: tailwindColors['base-2'],
    },
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
        sx: { textTransform: 'none', fontSize: 14, gap: '1em' },
      },
    },
  },
});
