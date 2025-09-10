import type { ButtonHTMLAttributes, ReactNode } from 'react';
import '@/styles/atoms/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => (
   <button className={`button ${className}`} {...props}>
      {children}
   </button>
);

export default Button;
