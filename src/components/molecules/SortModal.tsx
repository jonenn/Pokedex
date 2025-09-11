import RadioInput from '../atoms/RadioInput';
import '@/styles/molecules/SortModal.css';
import Text from '../atoms/Text';

interface SortModalProps {
   selected: string;
   onChange: (value: string) => void;
}

const SortModal = ({ selected, onChange }: SortModalProps) => {
   return (
      <div className="sort-modal">
         <Text as="h5" className="sort-modal__title">
            Sort by:
         </Text>
         <div className="sort-modal__content">
            <RadioInput
               label="Number"
               name="sort"
               value="number"
               checked={selected === 'number'}
               onChange={() => onChange('number')}
            />
            <RadioInput
               label="Name"
               name="sort"
               value="name"
               checked={selected === 'name'}
               onChange={() => onChange('name')}
            />
         </div>
      </div>
   );
};

export default SortModal;
