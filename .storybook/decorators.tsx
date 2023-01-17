import { withDesign } from 'storybook-addon-designs';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const globalDecorators = [mswDecorator, withDesign];
