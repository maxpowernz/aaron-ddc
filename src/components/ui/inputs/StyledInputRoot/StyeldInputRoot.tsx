import { styled } from '@mui/system';
import { inputUnstyledClasses } from '@mui/base/InputUnstyled';

export const StyledInputBaseRoot = styled('div', {
  slot: 'Root',
  name: 'StyledInputBase',
  overridesResolver: (prop, styles) => [styles.root],
})(
  ({ theme }) => `
  font: 14px IBM Plex Sans, sans-serif;
  border-radius: 4px;
  color: ${theme.palette.text.primary};
  background: ${theme.palette.text.secondary};
  outline: 0;
  display: flex;
  
  > input, textarea {
    outline: 0;
    background: transparent;
    padding: 0.75em;
    width: 100%;
  }

  &:hover {
    background: ${theme.palette.text.disabled};
  }
  
  &.${inputUnstyledClasses.focused},
  &:focus-within {
    outline: 1px solid ${theme.palette.primary.main};
  }  
  
  &.${inputUnstyledClasses.disabled} {
    outline: 1px solid ${theme.palette.text.disabled};
    background: none;
  }
  
  &.${inputUnstyledClasses.error} {
    outline: 1px solid ${theme.palette.error.main};
  }
`
);
