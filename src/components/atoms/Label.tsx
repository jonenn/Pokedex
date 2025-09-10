import '@/styles/atoms/TypeLabel.css';

interface TypeLabelProps {
   type: keyof typeof typeColors;
   className?: string;
}

const typeColors = {
   //add colors for all types
};

const TypeLabel = ({ type, className = '' }: TypeLabelProps) => {
   return (
      <span
         className={`type-label ${className}`}
         style={{ backgroundColor: typeColors[type], color: 'white' }}
      >
         {type}
      </span>
   );
};

export default TypeLabel;
