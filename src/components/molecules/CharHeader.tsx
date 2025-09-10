import NavArrow from '../atoms/NavBar';
import Text from '../atoms/Text';

interface CharHeaderProps {
   name?: string;
   number?: number;
}

const CharHeader = ({ name, number }: CharHeaderProps) => {
   return (
      <div className="char-header">
         <NavArrow />
         <Text>{name || 'Pokémon Name'}</Text>
         <Text>{number || '#999'}</Text>
      </div>
   );
};

export default CharHeader;
