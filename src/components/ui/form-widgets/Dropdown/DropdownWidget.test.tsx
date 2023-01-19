import { composeStories, render, screen } from '@/test-utils';

import * as scope from '@/components/util/form/hooks/useScope';
import * as formField from '@/components/util/form/hooks/useFormField';
import * as stories from './DropdownWidget.stories';

const { Default } = composeStories(stories);

describe('form-widgets/Dropdown', () => {
  it('should render correctly', async () => {
    const placeholder = 'Please select...';
    render(<Default menuIsOpen placeholder={placeholder} />);
    const placeholders = screen.getAllByText(placeholder);
    expect(placeholders).toHaveLength(2);
  });

  it.each`
    isVisible | calledTimes
    ${false}  | ${0}
    ${true}   | ${1}
  `('should render depending on in scope = $isVisible', async ({ isVisible, calledTimes }) => {
    const renderFn = vi.fn();
    vi.spyOn(scope, 'useScope').mockReturnValueOnce({ options: [], isVisible });
    vi.spyOn(formField, 'useFormField').mockReturnValueOnce({ render: renderFn });
    render(<Default />);

    expect(renderFn).toHaveBeenCalledTimes(calledTimes);
  });
});
