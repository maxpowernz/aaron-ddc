import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledInputBaseRoot } from './StyledInputBaseRoot';

export default {
  title: 'Atoms/StyledInputBaseRoot',
  component: StyledInputBaseRoot,
  args: { className: 'w-4 p-3' },
  parameters: {},
} as ComponentMeta<typeof StyledInputBaseRoot>;

const Template: ComponentStory<typeof StyledInputBaseRoot> = (args) => {
  return (
    <>
      <StyledInputBaseRoot aria-label="Input base root" {...args}>
        Test content
      </StyledInputBaseRoot>
    </>
  );
};
/*

function hexToRgba(hex: string = '') {
  // remove invalid characters
  hex = hex.replace(/[^0-9a-fA-F]/g, '');

  if (hex.length < 5) {
    // 3, 4 characters double-up
    hex = hex
      .split('')
      .map((s) => s + s)
      .join('');
  }

  // parse pairs of two
  let rgba = hex.match(/.{1,2}/g)?.map((s) => parseInt(s, 16));

  // alpha code between 0 & 1 / default 1
  // @ts-ignore
  rgba[3] = rgba.length > 3 ? parseFloat(rgba[3] / 255).toFixed(2) * 1 : 1;
  // @ts-ignore
  return 'rgba(' + rgba.join(', ') + ')';
}
*/

export const Default = Template.bind({});

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Focused = Template.bind({});
Focused.parameters = { pseudo: { focus: true } };
Focused.args = {
  className: 'w-4 p-3 Mui-focused',
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: 'w-4 p-3 Mui-disabled',
};

export const Error = Template.bind({});
Error.parameters = { pseudo: { error: true } };
Error.args = {
  className: 'w-4 p-3 Mui-error',
};
