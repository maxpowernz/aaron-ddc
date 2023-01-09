import { styled } from '@mui/system';
import { inputBaseClasses } from '@mui/material/InputBase';

export const StyledInputBaseRoot = styled('div')(
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
  
  &.${inputBaseClasses.focused},
  .${inputBaseClasses.focused},
  &:focus-within {
    border-radius: 4px;
    outline: 1px solid ${theme.palette.primary.main};
  }  
  
  &.${inputBaseClasses.disabled} {
    outline: 1px solid ${theme.palette.text.disabled};
    color: ${theme.palette.text.primary};
    background: none;
  }
  
  &.${inputBaseClasses.error} {
    outline: 1px solid ${theme.palette.error.main};
  }
    
  > * {
    &::before, &::after {
      border: 0 !important;
    }
  }
`
);
