import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { InputProps } from '../input-types';

export type TextareaProps = {
  rows?: number;
} & InputProps;

// Updates the height of a <textarea> when the value changes.
// TODO: Write test
const useAutosizeTextArea = () => {
  const ref = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    let currElement: HTMLTextAreaElement;

    if (ref.current) {
      currElement = ref.current;

      const initialHeight = currElement.scrollHeight;

      const resize = (): void => {
        if (ref?.current) {
          currElement.style.height = `${initialHeight}px`;
          const scrollHeight = currElement.scrollHeight;
          console.log(scrollHeight);
          currElement.style.height = scrollHeight + 'px';
        }
      };

      currElement?.addEventListener('input', resize);
      return () => {
        return currElement?.removeEventListener('input', resize);
      };
    }
  }, []);

  return { ref };
};

HTMLInputElement;

// TODO: Combine refs
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function CustomInput(
  { error, className, disabled, label, size = 4, rows = 2, ...props },
  ref
) {
  const width = `w-grid-${size}`;
  const { ref: autoSizeRef } = useAutosizeTextArea();

  const baseStyle = classnames(`${width} flex text-base rounded outline bg-gray-5 hover:bg-gray-10 p-3`, {
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
      ref={(node: HTMLTextAreaElement) => {
        autoSizeRef.current = node;
      }}
      disabled={disabled}
      {...props}
    />
  );
});

export default Textarea;
