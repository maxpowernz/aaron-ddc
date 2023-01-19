import { act, render, renderHook, screen, userEvent, withFormWrapper } from '@/test-utils';

import { TextInput } from '@/components/ui/atoms';
import * as formUtil from '@/components/util/form/hooks/useSaveField';

import { useFormFieldGroup, isNestedFieldError, getErrorMessage } from './useFormFieldGroup';

type TestData = {
  firstName: string;
  lastName: string;
};

describe('useFormFieldGroup', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  const props = {
    question: 'Please enter your name',
    name: 'firstName',
    required: true,
    fields: [
      { name: 'firstName', label: 'First Name', component: TextInput },
      { name: 'lastName', label: 'Last Name', component: TextInput },
    ],
    size: 4,
  };

  const { question, required, fields } = props;

  it('should render correctly', async () => {
    const { result } = renderHook(() => useFormFieldGroup(props), {
      wrapper: withFormWrapper<TestData>({ defaultValues: {} }),
    });
    expect(result.current).toBeDefined();
    expect(result.current).toEqual(expect.objectContaining({ question, required, render: expect.any(Function) }));

    render(<>{result.current.render()}</>);

    const textboxes = screen.getAllByRole('textbox');
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByLabelText('required')).toBeInTheDocument();
    expect(textboxes.length).toBe(fields.length);
    expect(screen.getByText(fields[0].label)).toBeInTheDocument();
    expect(screen.getByText(fields[1].label)).toBeInTheDocument();

    await act(() => {
      result.current.setError?.('firstName', { type: 'custom', message: 'Custom message' });
    });
    expect(screen.getByText('Custom message')).toBeInTheDocument();
  });

  it('should render correctly with no sub-label', async () => {
    const { result } = renderHook(
      () => useFormFieldGroup({ ...props, required: false, fields: fields.map(({ name, component }) => ({ name, component })) }),
      {
        wrapper: withFormWrapper<TestData>({ defaultValues: {} }),
      }
    );
    render(<>{result.current.render()}</>);

    expect(screen.queryByLabelText('required')).toBeNull();
    expect(screen.queryByText(fields[0].label)).toBeNull();
    expect(screen.queryByText(fields[1].label)).toBeNull();
  });

  it('should invoke function(s) correctly', async () => {
    const saveField = vi.fn();
    vi.spyOn(formUtil, 'useSaveField').mockReturnValue(saveField);

    const { result } = renderHook(() => useFormFieldGroup(props), {
      wrapper: withFormWrapper<TestData>({ defaultValues: {} }),
    });
    render(<>{result.current.render()}</>);

    const textbox = screen.getAllByRole('textbox')[0];
    const textContent = 'First name';

    await userEvent.click(textbox);
    expect(textbox).toHaveFocus();

    await userEvent.type(textbox, textContent);
    expect(textbox).toHaveValue(textContent);

    await userEvent.tab();
    await expect(saveField).toHaveBeenCalledWith(expect.objectContaining({ name: 'firstName', value: textContent }));
  });

  it('should return correct type guard result', async () => {
    expect(isNestedFieldError({ message: 'Required' })).toBeFalsy();
    expect(getErrorMessage({ message: 'Required' })).toBe('Required');
    expect(isNestedFieldError({ value: { message: 'Required' } })).toBeTruthy();
    expect(getErrorMessage({ value: { message: 'Required' } })).toBe('Required');
  });
});
