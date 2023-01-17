import { render, screen, userEvent, withFormWrapper } from '@/test-utils';

import { AppendableList } from './AppendableList';
import { Text } from '@/components/ui/form-widgets';

vi.mock('@/assets/icons/18x18/plus.svg', () => ({ default: 'svg' }));

type TestData = {
  firstName: string;
  lastName: string;
};

describe('AppendableList', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', async () => {
    const question = 'Please enter your names';
    const addButtonLabel = 'Name';
    const name = 'names';

    const props = { question, addButtonLabel, name };

    render(
      <AppendableList {...props}>
        <Text name="name" />
      </AppendableList>,
      { wrapper: withFormWrapper<TestData>({ defaultValues: {} }) }
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    const addButton = screen.getByRole('button');
    expect(addButton).toBeInTheDocument();

    await userEvent.click(addButton);

    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByText(question).length).toBe(1);
  });
});
