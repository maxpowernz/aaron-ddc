import React from 'react';
// import { styled } from '@mui/system';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroupMui from '@mui/material/RadioGroup';

// const BpIcon = styled('span')(({ theme }) => ({
//   borderRadius: '50%',
//   width: 16,
//   height: 16,
//   boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//   backgroundColor: '#f5f8fa',
//   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//   '.Mui-focusVisible &': {
//     outline: '2px auto rgba(19,124,189,.6)',
//     outlineOffset: 2,
//   },
//   'input:hover ~ &': {
//     backgroundColor: theme.palette.primary.light,
//   },
//   'input:disabled ~ &': {
//     boxShadow: 'none',
//     background: 'rgba(206,217,224,.5)',
//   },
// }));

// const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//   '&:before': {
//     display: 'block',
//     width: 16,
//     height: 16,
//     backgroundImage: `radial-gradient(${theme.palette.primary.contrastText},${theme.palette.primary.contrastText} 12%,transparent 22%)`,
//     content: '""',
//   },
//   'input:hover ~ &': {
//     backgroundColor: theme.palette.primary.main,
//     '.Mui-error &': {
//       backgroundColor: theme.palette.error.main,
//     },
//   },
//   '.Mui-error &': {
//     backgroundColor: theme.palette.error.main,
//   },
// }));

const defaultOptions = [
  { id: 'yes', label: 'Yes', value: true },
  { id: 'no', label: 'No', value: false },
];

// export const RadioGroup = React.forwardRef(function CustomInput(
//   { options = defaultOptions, size = 12, cols, ...props }: CustomRadioGroupProps,
//   ref: React.ForwardedRef<HTMLDivElement>
// ) {
//   const layout = cols ? `grid grid-cols-1 sm:grid-cols-${cols}` : 'flex flex-wrap';
//   return (
//     <RadioGroupMui {...props} ref={ref}>
//       <div className={`${layout} w-${size} items-center gap-x-4 mx-2`}>
//         {options?.map(({ id, name, label, value }: OptionProps) => {
//           return (
//             <FormControlLabel
//               key={id}
//               value={value}
//               control={<Radio name={name} checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} />}
//               label={label}
//             />
//           );
//         })}
//       </div>
//     </RadioGroupMui>
//   );
// });

export const RadioGroup = () => <div>radio</div>;

export default RadioGroup;
