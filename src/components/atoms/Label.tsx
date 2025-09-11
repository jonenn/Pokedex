import '@/styles/atoms/Label.css';
import { typeColors } from '../../utils/typeColors';

interface LabelProps {
   type: string;
   className?: string;
}

const Label = ({ type, className = '' }: LabelProps) => {
   const typeLower = type.toLowerCase();
   return (
      <span
         className={`label ${className}`}
         style={{
            backgroundColor: typeColors[typeLower] || 'var(--gray-medium)',
         }}
      >
         {type}
      </span>
   );
};

export default Label;
