import React, { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

vi.mock('@/src/assets/icons/18x18/invalid.svg', () => ({ default: 'svg' }));
vi.mock('@/src/assets/icons/18x18/caret.svg', () => ({ default: 'svg' }));

afterEach(() => {
  cleanup();
});

type WrapperType = React.JSXElementConstructor<{ children: React.ReactElement }>;

export function withProviders(Wrapper: WrapperType = React.Fragment) {
  return function CreatedWrapper({ children }: { children: ReactElement }) {
    return <Wrapper>{children}</Wrapper>;
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
export * from '@storybook/testing-react';
// override render export
export { customRender as render };
