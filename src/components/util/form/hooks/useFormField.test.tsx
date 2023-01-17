import { renderHook, withFormWrapper } from '@/test-utils';

import { BasicInput } from '@/components/ui/inputs';
import * as formUtil from '@/components/util/form/hooks/useFormFieldGroup';

import { useFormField } from './useFormField';

type TestData = {
  firstName: string;
  lastName: string;
};

describe('useFormField', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  const name = 'firstName';
  const component = BasicInput;
  const props = { question: 'Please enter your name', size: 4, name, component };

  it('should render correctly', async () => {
    const useFormFieldGroupSpy = vi.spyOn(formUtil, 'useFormFieldGroup');
    const { result } = renderHook(() => useFormField(props), {
      wrapper: withFormWrapper<TestData>({ defaultValues: {} }),
    });
    expect(result.current).toBeDefined();
    expect(useFormFieldGroupSpy).toHaveBeenCalledWith({ fields: [{ name, component }], ...props, component: undefined });
  });
});
