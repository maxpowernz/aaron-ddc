import React from 'react';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { StyledInputBaseRoot } from '@/src/components/ui/inputs/StyledInputBaseRoot/StyledInputBaseRoot';
import { InputProps, OptionProps } from '../input-types';
import classnames from 'classnames';

export type CustomSelectProps = Omit<SelectProps, 'size'> & InputProps & OptionProps;
/*
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    backgroundColor: '#fff',
    color: '#000',
    boxShadow: 'none',
    border: '1px solid #ddd',
  },
});

function MyComponent(props) {
  const { classes } = props;
  return (
    <Select
      MenuProps={{
        PaperProps: {
          className: classes.paper,
        },
      }}
    >
      {/!* Select options *!/}
    </Select>
  );
}

export default withStyles(styles)(MyComponent);
*/

export const Select = React.forwardRef(function CustomInput(
  { error, disabled, label, size = 4, ...props }: CustomSelectProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;

  const baseStyle = classnames(`${width}`, {
    'Mui-disabled': disabled,
    'Mui-error': error,
  });

  return (
    <StyledInputBaseRoot className={baseStyle}>
      <MuiSelect
        variant="standard"
        className={width}
        {...props}
        ref={ref}
        error={Boolean(error)}
        disabled={disabled}
        inputProps={{
          ...props.inputProps,
          'aria-label': props['aria-label'] ?? label ?? props.name,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MuiSelect>
    </StyledInputBaseRoot>
  );
});

export default Select;
