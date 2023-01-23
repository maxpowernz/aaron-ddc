import React from 'react';
import { composeStories, render, screen, userEvent } from '@/test-utils';

import * as stories from './Radio.stories';

const { Default, Checked, Disabled, Invalid } = composeStories(stories);

describe('atoms/Radio', () => {
  it('should render Default correctly', async () => {
    const user = userEvent.setup();
    const { container } = render(<Default />);
    const [label] = container.children;
    const [checkContainer] = label.children;
    expect(checkContainer).toBeInTheDocument();

    const input = screen.getByRole('radio');
    expect(input).toBeEnabled();

    await user.click(input);
    expect(input).toBeChecked();
  });

  it('should render Checked correctly', async () => {
    render(<Checked />);

    const input = screen.getByRole('radio');

    const div1 = input.nextSibling;
    expect(div1).toHaveClass('bg-fmg-green');
    const div2 = div1?.nextSibling;
    expect(div2).toHaveClass('bg-white');
  });

  it('should render Invalid correctly', async () => {
    render(<Invalid />);

    const input = screen.getByRole('radio');

    const div1 = input.nextSibling;
    expect(div1).toHaveClass('bg-error');
    const div2 = div1?.nextSibling;
    expect(div2).toHaveClass('bg-white');
  });

  it('should render Disabled correctly', async () => {
    render(<Disabled />);

    const input = screen.getByRole('radio');
    expect(input).toBeDisabled();
  });
});
