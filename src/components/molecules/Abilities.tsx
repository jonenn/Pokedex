import '@/styles/molecules/Abilities.css';
import Text from '../atoms/Text';

interface AbilitiesProps {
   abilities: string[];
}

const Abilities = ({ abilities }: AbilitiesProps) => {
   return (
      <div className="abilities">
         {abilities.map((ability, index) => (
            <Text key={index}>{ability}</Text>
         ))}
      </div>
   );
};

export default Abilities;
