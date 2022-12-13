/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      /**
       * Storybook (specifically the interactions addon) requires that we use their
       *   instrumented version of jest-expect. So our storybook does so. To make
       *   these interactions still work in vitest we have @storybook/jest aliased
       *   to resolve to vitest which, critically, exports { expect } as well.
       */
      '@storybook/jest': 'vitest',
      'test-utils': path.resolve(__dirname, 'test/test-utils'),
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    exclude: ['node_modules/', 'coverage/', 'public/', 'test/', 'stories/', '.storybook/'],
    setupFiles: ['./test/setup.ts'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', '__tests__/', 'coverage/', 'public/', 'test/', 'stories/', '.storybook/'],
    },
  },
});
