import React from 'react';
// import { MUIStyledCommonProps, styled } from '@mui/system';
// import { inputBaseClasses } from '@mui/material/InputBase';
// import MuiSelect, { selectClasses, SelectProps } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

import { InputProps } from '../input-types';

// export type CustomSelectProps = Omit<SelectProps, 'size'> & InputProps & MUIStyledCommonProps;

// export const StyledSelect = styled(MuiSelect)<CustomSelectProps>(
//   ({ theme }) => `

//   background: transparent;

//   .${selectClasses.filled} {
//     padding: 9px;

//     border-radius: 4px;
//     color: ${theme.palette.text.primary};
//     background: ${theme.palette.text.secondary};
//   }

//   &:hover {
//     background: ${theme.palette.text.disabled};
//   }

//   &.${inputBaseClasses.focused} {
//     border-radius: 4px;
//     border: 1px solid ${theme.palette.primary.main};
//   }

//   &::before, &::after {
//     border: 0 !important;
//   }
//   `
// );

// export const Select = React.forwardRef(function CustomInput(
//   { error, disabled, label, options, placeholder, size = 4, ...props }: CustomSelectProps,
//   ref: React.ForwardedRef<HTMLDivElement>
// ) {
//   const width = `w-${size}`;

//   // TODO: To find a better way
//   const MenuProps = {
//     PaperProps: { sx: { width: size * 48, maxHeight: 42 * 7 } },
//   };

//   return (
//     <StyledSelect
//       variant="filled"
//       className={width}
//       {...props}
//       ref={ref}
//       error={Boolean(error)}
//       disabled={disabled}
//       inputProps={{
//         ...props.inputProps,
//         'aria-label': props['aria-label'] ?? label ?? props.name,
//       }}
//       renderValue={(selected) => {
//         if (selected.length === 0) {
//           return <span className="opacity-50">{placeholder}</span>;
//         }

//         return options?.find(({ value }) => value === selected)?.label;
//       }}
//       MenuProps={MenuProps}
//       displayEmpty
//     >
//       <MenuItem value="">{placeholder}</MenuItem>
//       {options?.map((option) => (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))}
//     </StyledSelect>
//   );
// });

export const Select = () => <div>select</div>;

export default Select;
