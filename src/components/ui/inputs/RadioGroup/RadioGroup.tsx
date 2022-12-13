import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroupMui, { RadioGroupProps } from '@mui/material/RadioGroup';

import { IInputProps, IOptionProps } from '../input-types';
import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#20940033',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#209400',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#209400',
  },
});

type CustomRadioGroupProps = {
  cols?: number;
} & IInputProps &
  RadioGroupProps;

const defaultOptions = [
  { id: 'yes', label: 'Yes', value: true },
  { id: 'no', label: 'No', value: false },
];

export const RadioGroup = React.forwardRef(function CustomInput(
  { options = defaultOptions, size = 12, cols, ...props }: CustomRadioGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const layout = cols ? `grid grid-cols-1 sm:grid-cols-${cols}` : 'flex flex-wrap';
  return (
    <RadioGroupMui {...props} ref={ref}>
      <div className={`${layout} w-${size} items-center gap-x-4 mx-2`}>
        {options?.map(({ id, name, label, value }: IOptionProps) => {
          return (
            <FormControlLabel
              key={id}
              value={value}
              control={
                <Radio
                  name={name}
                  focusRipple
                  sx={{ padding: 0.6, color: 'green' }}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
              }
              label={label}
              componentsProps={{
                typography: {
                  sx: { fontSize: 14, fontWeight: 400, height: 42, paddingTop: 1.5 },
                },
              }}
            />
          );
        })}
      </div>
    </RadioGroupMui>
  );
});

export default RadioGroup;
