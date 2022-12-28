import { useFormContext } from 'react-hook-form';
import { IUseScopeProps, IUseScopeReturn } from '@/src/components/util/form/form-types';

export function useScope({ source, condition = true, values = {} }: IUseScopeProps): IUseScopeReturn {
  const { getValues } = useFormContext();

  if (source == null) return { isVisible: true, options: [] };

  // assuming the incoming scope is always a signle field and value
  const controlValue = getValues(source);
  const allValues = getValues();

  console.log({ controlValue, allValues, condition });

  const availableOptions = Object.entries(values).flatMap(([key, val]) => (key === controlValue ? val : []));

  const isSatisified = (): boolean => {
    if (typeof condition === 'function') {
      return condition(controlValue);
    }

    if (typeof controlValue === typeof condition) {
      return controlValue === condition;
    }

    return typeof condition === 'boolean' && condition;
  };

  return { isVisible: isSatisified(), options: availableOptions };
}
