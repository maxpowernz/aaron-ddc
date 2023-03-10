import { composeStories, render } from '@/test-utils';

import * as scope from '@/components/util/form/hooks/useScope';
import * as formField from '@/components/util/form/hooks/useFormField';
import * as stories from './Textarea.stories';

const { Default } = composeStories(stories);

describe('form-widgets/Textarea', () => {
  it.each`
    isVisible | calledTimes
    ${false}  | ${0}
    ${true}   | ${1}
  `('should render depending on when in scope = $isVisible', async ({ isVisible, calledTimes }) => {
    const renderFn = vi.fn();
    vi.spyOn(scope, 'useScope').mockReturnValueOnce({ options: [], isVisible });
    vi.spyOn(formField, 'useFormField').mockReturnValueOnce({ render: renderFn });
    render(<Default />);

    expect(renderFn).toHaveBeenCalledTimes(calledTimes);
  });
});
