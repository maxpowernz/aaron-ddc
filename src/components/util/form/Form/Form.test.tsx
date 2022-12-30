import { render, screen } from 'test-utils';

import * as model from '@/src/components/util/form/test/mock-model';
import * as formUtil from '@/src/components/util/form/hooks/useLoadTable';

import { Form, FormType } from './Form';

const FormContent = (props: FormType) => (
  <Form {...props}>
    <div>Form Content</div>
  </Form>
);

describe('useFormField', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  const db = new model.MockDB('TestDB', { friends: '++, name, age' });

  const useLoadTableSpy = vi.spyOn(formUtil, 'useLoadTable');

  const props = {
    model: { ...model, table: db.friends },
    uid: 1,
    onSubmit: vi.fn(),
  };

  it('should render correctly when no table', async () => {
    const props = { model, uid: 1, onSubmit: vi.fn() };

    render(<FormContent {...props} />);
    expect(useLoadTableSpy).toHaveBeenCalled();
    expect(screen.queryByText('Form Content')).toBeDefined();
  });

  it('should render correctly', async () => {
    useLoadTableSpy.mockReturnValueOnce({ result: {}, isLoaded: true });
    render(<FormContent {...props} />);
    expect(screen.queryByText('Form Content')).toBeDefined();
  });

  it('should render nothing when no loaded data', async () => {
    render(<FormContent {...props} />);
    expect(useLoadTableSpy).toHaveBeenCalled();
    expect(screen.queryByText('Form Content')).toBeNull();
  });
});
