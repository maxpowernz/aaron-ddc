import '@testing-library/jest-dom';
import 'fake-indexeddb/auto';
// setupFile.js
import { setGlobalConfig } from '@storybook/testing-react';

// Storybook's preview file location
import * as globalStorybookConfig from '.storybook/preview';

// Replace with setProjectAnnotations if you are using the new pre-release version the addon
setGlobalConfig(globalStorybookConfig);

vi.mock('@/assets/icons/18x18/invalid.svg', () => ({ default: 'svg' }));
vi.mock('@/assets/icons/18x18/caret.svg', () => ({ default: 'svg' }));
vi.mock('@/assets/icons/18x18/plus.svg', () => ({ default: 'svg' }));
