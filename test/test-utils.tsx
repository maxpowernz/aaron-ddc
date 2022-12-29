/* eslint-disable import/export */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { ThemeProvider } from '@mui/system';
import { theme } from '@/src/theme/mui-theme';

afterEach(() => {
  cleanup();
});

const AllProviders = ({ children }: { children: React.ReactElement }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: AllProviders,
    ...options,
  });

export * from './withFormWrapper';
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
