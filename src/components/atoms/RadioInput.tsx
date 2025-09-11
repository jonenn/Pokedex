import type { InputHTMLAttributes } from 'react';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
}

const RadioInput = ({ label, ...props }: RadioInputProps) => {
   return (
      <label className="radio-input">
         <input type="radio" {...props} />
         {label}
      </label>
   );
};

export default RadioInput;
