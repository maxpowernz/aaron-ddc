import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { useCombinedRefs } from '@/components/util/hooks/useCombinedRefs';
import { InputProps } from '../input-types';

export type TextareaProps = {
  autosize?: boolean;
  rows?: number;
} & InputProps;

// TODO: Write test
export const useAutosizeTextArea = () => {
  const ref = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    let currElement: HTMLTextAreaElement;

    if (ref.current) {
      currElement = ref.current;

      const initialHeight = currElement.scrollHeight;

      const resize = (): void => {
        currElement.style.height = `${initialHeight}px`;
        const scrollHeight = currElement.scrollHeight;
        currElement.style.height = `${scrollHeight}px`;
      };

      currElement?.addEventListener('keyup', resize);
      return () => {
        return currElement?.removeEventListener('keyup', resize);
      };
    }
  }, []);

  return { ref };
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function CustomInput(
  { autosize = true, error, className, disabled, label, size = 4, rows = 2, ...props },
  ref
) {
  const width = `w-grid-${size}`;
  const { ref: autosizeRef } = useAutosizeTextArea();

  const [, setRef] = useCombinedRefs([ref, autosize ? autosizeRef : null]);

  const baseStyle = classnames(`${width} transition ease-in duration-150 flex text-base rounded outline bg-gray-5 hover:bg-gray-10 p-3`, {
    'outline-1 outline-gray-10 bg-transparent hover:bg-transparent': disabled,
    'outline-0 outline-fmg-green active:outline-1 focus-within:outline-1': !disabled && !error,
    'outline-1 outline-error': error,
    className,
  });

  return (
    <textarea
      className={baseStyle}
      rows={rows}
      aria-invalid={Boolean(error)}
      aria-label={props['aria-label'] ?? label ?? props.name}
      ref={setRef}
      disabled={disabled}
      {...props}
    />
  );
});

export default Textarea;
