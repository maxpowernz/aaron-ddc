import React from 'react';
import { composeStories, render, screen, userEvent } from '@/test-utils';

import { isOptionType, isPlaceholder } from '@/components/ui/atoms/Dropdown/Dropdown';
import * as stories from './Dropdown.stories';
import { NoOptions } from './Dropdown.stories';

const { Default, Disabled } = composeStories(stories);

describe('atoms/Dropdown', () => {
  it('should return correct type guard result', async () => {
    const option = { value: 1, label: 'First' };
    expect(isOptionType(option)).toBeTruthy();

    const nonOption = {};
    expect(isOptionType(nonOption)).toBeFalsy();
  });

  it('should return whether data is a placeholder', async () => {
    const placeholder = { value: '', label: 'Select...' };
    expect(isPlaceholder(placeholder)).toBeTruthy();

    const option = { value: 1, label: 'First' };
    expect(isPlaceholder(option)).toBeFalsy();
  });

  it('should Default render correctly', async () => {
    render(<Default />);

    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('should Disabled render correctly', async () => {
    render(<Disabled />);

    const input = await screen.queryByRole('combobox');
    expect(input).not.toBeInTheDocument();
  });

  it('should NoOptions render correctly', async () => {
    const message = 'No available data';
    render(<NoOptions name="metric" noOptionsMessage={() => message} menuIsOpen />);

    const noOptionsMessage = await screen.getByText(message);
    expect(noOptionsMessage).toBeInTheDocument();
  });

  describe('styles', () => {
    const user = userEvent.setup();

    const options = [
      { value: '10', label: 'Kg' },
      { value: '20', label: 'g' },
    ];
    const placeholder = 'Select...';

    it('should style menu correctly', async () => {
      render(<Default options={options} placeholder={placeholder} />);

      const control = screen.getByRole('combobox');
      await user.click(control);

      const placeholderOption = screen.getByText(placeholder);
      const option1 = screen.getByText(options[0].label);
      const option2 = screen.getByText(options[1].label);
      expect(placeholderOption).toBeInTheDocument();
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
    });

    it.each`
      value         | selectedOptionLabel
      ${options[0]} | ${options[0].label}
      ${options[1]} | ${options[1].label}
      ${''}         | ${placeholder}
    `('should style selected option $selectedOptionLabel correctly', async ({ value, selectedOptionLabel }) => {
      render(<Default options={options} placeholder={placeholder} value={value} />);

      const selectedOption = screen.getByText(selectedOptionLabel);
      expect(selectedOption).toBeInTheDocument();
    });
  });
});
