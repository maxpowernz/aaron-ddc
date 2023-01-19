import React from 'react';
import { InputProps } from '@/components/ui/atoms';
import styles from './Radio.module.css';

export const Radio = React.forwardRef<HTMLInputElement, InputProps>(function CustomInput(
  { error, className, disabled, label, ...props },
  ref
) {
  return (
    <label
      className={`${styles.container} ${className} flex gap-1 ${disabled ? styles.disabled : ''}`}
      aria-invalid={Boolean(error)}
      {...props}
    >
      <div className={styles.checkcontainer}>
        <input type="radio" name="radio" ref={ref} disabled={disabled} />
        <div className={styles.checkmark}></div>
      </div>
      <span className={styles.checklabel}>{label}</span>
    </label>
  );
});

export default Radio;
