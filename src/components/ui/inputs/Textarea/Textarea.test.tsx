import { composeStories, render, screen, userEvent } from '@/test-utils';

import * as stories from './Textarea.stories';
import { renderHook } from '@testing-library/react';
import { useAutosizeTextArea } from '@/components/ui/inputs';
import React from 'react';

const { Default, FixedSized } = composeStories(stories);

describe('inputs/Textarea', () => {
  it('should render hook correctly', async () => {
    const { result } = renderHook(useAutosizeTextArea);
    const { ref } = result.current;

    expect(ref.current).not.toBeNull();
  });

  it('should render correctly for autosized', async () => {
    const user = userEvent.setup();

    render(<Default />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'a{enter}b{enter}c{enter}');
    expect(input).toHaveValue('a\nb\nc\n');
    expect(input.style.height).toContain(input.scrollHeight);
  });

  it('should render correctly for fixed', async () => {
    const user = userEvent.setup();

    render(<FixedSized />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'a{enter}b{enter}c{enter}');
    expect(input).toHaveValue('a\nb\nc\n');
    expect(input.style.height).toBeFalsy();
  });
});
