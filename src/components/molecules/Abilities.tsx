import '@/styles/molecules/Abilities.css';
import Text from '../atoms/Text';

interface AbilitiesProps {
   abilities: string[];
   label: string;
}

const Abilities = ({ abilities, label }: AbilitiesProps) => {
   return (
      <div className="abilities">
         <div className="abilities__moves">
            {abilities.map((ability, index) => (
               <Text key={index}>{ability}</Text>
            ))}
         </div>
         <Text className="about-item__label">{label}</Text>
      </div>
   );
};

export default Abilities;
