import { composeStories, render, screen } from 'test-utils';

import * as stories from './RadioGroup.stories';

const { Default } = composeStories(stories);

describe('inputs/RadioGroup', () => {
  it.each`
    cols         | className
    ${3}         | ${'grid grid-cols-1 sm:grid-cols-3'}
    ${undefined} | ${'flex'}
  `('should render correctly with $className', async ({ cols, className }) => {
    render(<Default cols={cols} />);

    const input = screen.getAllByRole('radio')[0];
    const root = input.closest('div');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass(className);
  });
});
