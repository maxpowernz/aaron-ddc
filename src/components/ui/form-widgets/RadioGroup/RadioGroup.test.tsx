import { composeStories, render, screen, userEvent } from 'test-utils';

import * as scope from '@/src/components/util/form/hooks/useScope';
import * as saveField from '@/src/components/util/form/hooks/useSaveField';
import * as formField from '@/src/components/util/form/hooks/useFormFieldGroup';
import * as stories from './RadioGroup.stories';

const { Default } = composeStories(stories);

describe('form-widgets/RadioGroup', () => {
  it('should invoke saveField correctly', async () => {
    const saveFieldSpy = vi.spyOn(saveField, 'useSaveField');
    const user = userEvent.setup();
    render(<Default />);

    const input = screen.getAllByRole('radio')[0];
    expect(input).toBeInTheDocument();

    await user.click(input);
    await expect(saveFieldSpy).toHaveBeenCalled();
  });

  it.each`
    isVisible | calledTimes
    ${false}  | ${0}
    ${true}   | ${1}
  `('should not render when in scope = $isVisible', async ({ isVisible, calledTimes }) => {
    const renderFn = vi.fn();
    vi.spyOn(scope, 'useScope').mockReturnValueOnce({ options: [], isVisible });
    vi.spyOn(formField, 'useFormFieldGroup').mockReturnValueOnce({ render: renderFn });
    render(<Default />);

    expect(renderFn).toHaveBeenCalledTimes(calledTimes);
  });
});
