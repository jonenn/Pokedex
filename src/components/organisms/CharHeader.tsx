import NavArrow from '../molecules/NavArrow';
import Text from '../atoms/Text';
import '@/styles/organisms/CharHeader.css';

interface CharHeaderProps {
   name?: string;
   number?: number;
}

const CharHeader = ({ name, number }: CharHeaderProps) => {
   return (
      <div className="char__header">
         <div className="char__container">
            <NavArrow />
            <Text as="h1">{name || 'Pokémon Name'}</Text>
         </div>
         <Text as="h5" className="char__number">
            #{number || '999'}
         </Text>
      </div>
   );
};

export default CharHeader;
