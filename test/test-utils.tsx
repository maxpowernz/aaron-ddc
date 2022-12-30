/* eslint-disable import/export */
import React, { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { ThemeProvider } from '@mui/system';
import { theme } from '@/src/theme/mui-theme';

afterEach(() => {
  cleanup();
});

type WrapperType = React.JSXElementConstructor<{ children: React.ReactElement }>;

export function withProviders(Wrapper: WrapperType = React.Fragment) {
  return function CreatedWrapper({ children }: { children: ReactElement }) {
    return <ThemeProvider theme={theme}>{<Wrapper>{children}</Wrapper>}</ThemeProvider>;
  };
}
function customRender(ui: React.ReactElement, options: { wrapper?: WrapperType } = {}) {
  return render(ui, {
    ...options,
    // wrap provider(s) here if needed
    wrapper: withProviders(options.wrapper),
  });
}

export * from './withFormWrapper';
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
