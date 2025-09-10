import type { ReactNode } from 'react';
import '@/styles/atoms/CardWrapper.css';

interface MainProps {
   children: ReactNode;
   className?: string;
}

const CardWrapper = ({ children, className = '' }: MainProps) => {
   return <div className={`card__wrapper ${className}`}>{children}</div>;
};

export default CardWrapper;
