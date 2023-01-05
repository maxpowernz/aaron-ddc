import { composeStories, render, screen } from 'test-utils';

import * as stories from './Textarea.stories';

const { Disabled, Invalid } = composeStories(stories);

describe('inputs/Textarea', () => {
  it.each`
    Story       | className
    ${Disabled} | ${'Mui-disabled'}
    ${Invalid}  | ${'Mui-error'}
  `('should render $Story.storyName correctly', async ({ Story, className }) => {
    render(<Story />);

    const input = screen.getByTestId('textarea');
    const root = input.closest('div');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass(className);
  });
});
