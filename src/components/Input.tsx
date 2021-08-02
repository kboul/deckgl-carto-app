import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ariaLabel?: string;
  label?: string;
  name: string;
}

export default function Input({
  ariaLabel,
  label = '',
  name,
  ...otherProps
}: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input aria-label={ariaLabel} id={name} {...otherProps} />
    </>
  );
}
