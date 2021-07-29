import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ label, name, ...otherProps }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...otherProps} />
    </>
  );
}
