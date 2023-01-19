import { composeStories, render, screen, userEvent } from '@/test-utils';

import * as modelContext from '@/context/ModelContext';
import * as scope from '@/components/util/form/hooks/useScope';
import * as saveField from '@/components/util/form/hooks/useSaveField';
import * as formFieldGroup from '@/components/util/form/hooks/useFormFieldGroup';
import * as formField from '@/components/util/form/hooks/useFormField';
import * as stories from './RadioGroup.stories';
import React from 'react';
import * as model from '@/components/util/form/test/mock-model';

const { Default } = composeStories(stories);

describe('form-widgets/RadioGroup', () => {
  afterAll(() => vi.clearAllMocks());

  it('should render field without onChange', async () => {
    const renderFieldSpy = vi.spyOn(formField, 'useFormField');
    render(<Default />);

    expect(renderFieldSpy).not.toHaveBeenCalledWith(expect.objectContaining({ onChange: expect.any(Function) }));
  });

  it('should render field with onChange', async () => {
    const db = new model.MockDB('TestDB', { friends: '++, name, age' });
    vi.spyOn(modelContext, 'useModelContext').mockReturnValue({ table: db.friends, schema: {}, uid: 0 });

    const renderFieldSpy = vi.spyOn(formField, 'useFormField');
    render(<Default />);

    expect(renderFieldSpy).toHaveBeenCalledWith(expect.objectContaining({ onChange: expect.any(Function) }));
  });

  it('should invoke saveField correctly', async () => {
    const db = new model.MockDB('TestDB', { friends: '++, name, age' });
    vi.spyOn(modelContext, 'useModelContext').mockReturnValue({ table: db.friends, schema: {}, uid: 0 });

    const saveFiendFn = vi.fn();
    vi.spyOn(saveField, 'useSaveField').mockReturnValue(saveFiendFn);

    const user = userEvent.setup();
    render(<Default />);

    const input = screen.getAllByRole('radio')[0];
    expect(input).toBeInTheDocument();

    await user.click(input);
    await expect(saveFiendFn).toHaveBeenCalled();
  });

  it.each`
    isVisible | calledTimes
    ${false}  | ${0}
    ${true}   | ${1}
  `('should render depending on when in scope = $isVisible', async ({ isVisible, calledTimes }) => {
    const renderFn = vi.fn();
    vi.spyOn(scope, 'useScope').mockReturnValueOnce({ options: [], isVisible });
    vi.spyOn(formFieldGroup, 'useFormFieldGroup').mockReturnValueOnce({ render: renderFn });
    render(<Default />);

    expect(renderFn).toHaveBeenCalledTimes(calledTimes);
  });
});
