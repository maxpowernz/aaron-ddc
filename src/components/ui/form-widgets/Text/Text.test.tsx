import { composeStories, render, screen, userEvent } from '@/test/test-utils';

import * as scope from '@/src/components/util/form/hooks/useScope';
import * as formField from '@/src/components/util/form/hooks/useFormField';
import * as stories from './Text.stories';

const { Default, Required, AlphaOnly } = composeStories(stories);

describe('form-widgets/Text', () => {
  // Basically 100% covered in the primary render hook (useFormFieldGroup), so not repeating the same tests in other widgets
  describe('test functionality', () => {
    it('should fucntion Default correctly', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.tab();
      await expect(input).not.toHaveAttribute('aria-invalid');
    });

    it('should fucntion Required correctly', async () => {
      const user = userEvent.setup();
      render(<Required />);

      const asterisk = screen.getByLabelText('required');
      expect(asterisk).toBeInTheDocument();

      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.tab();
      await expect(input).toHaveAttribute('aria-invalid');
    });

    it('should fucntion AlphaOnly correctly', async () => {
      const user = userEvent.setup();
      render(<AlphaOnly />);

      const input = screen.getByRole('textbox');

      await user.keyboard('test');
      await user.tab();
      await expect(input).not.toHaveAttribute('aria-invalid');

      await user.keyboard('123');
      await user.tab();
      await expect(input).toHaveAttribute('aria-invalid');
    });
  });

  it.each`
    isVisible | calledTimes
    ${false}  | ${0}
    ${true}   | ${1}
  `('should not render when in scope = $isVisible', async ({ isVisible, calledTimes }) => {
    const renderFn = vi.fn();
    vi.spyOn(scope, 'useScope').mockReturnValueOnce({ options: [], isVisible });
    vi.spyOn(formField, 'useFormField').mockReturnValueOnce({ render: renderFn });
    render(<Default />);

    expect(renderFn).toHaveBeenCalledTimes(calledTimes);
  });
});
