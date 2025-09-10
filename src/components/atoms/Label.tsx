import '@/styles/atoms/Label.css';

interface LabelProps {
   type: string;
   className?: string;
}

const typeColors: Record<string, string> = {
   Normal: 'var(--color-normal)',
   Fighting: 'var(--color-main)',
   Flying: 'var(--color-main)',
   Ground: 'var(--color-main)',
   Poison: 'var(--color-main)',
   Rock: 'var(--color-main)',
   Bug: 'var(--color-bug)',
   Ghost: 'var(--color-ghost)',
   Steel: 'var(--color-steel)',
   Fire: 'var(--color-fire)',
   Water: 'var(--color-water)',
   Grass: 'var(--color-grass)',
   Electric: 'var(--color-electric)',
   Psychic: 'var(--color-psychic)',
   Ice: 'var(--color-main)',
   Dragon: 'var(--color-main)',
   Dark: 'var(--color-main)',
   Fairy: 'var(--color-main)',
};

const Label = ({ type, className = '' }: LabelProps) => {
   return (
      <span
         className={`label ${className}`}
         style={{
            backgroundColor: typeColors[type] || 'var(--gray-medium)',
         }}
      >
         {type}
      </span>
   );
};

export default Label;
