import type { InputHTMLAttributes } from "react";
import "@/styles/atoms/Input.css";

const Input = ({
   className = "",
   ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
   return <input className={`input ${className}`} {...props} />;
};

export default Input;
