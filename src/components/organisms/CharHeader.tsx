import NavArrow from '../molecules/NavArrow';
import Text from '../atoms/Text';
import '@/styles/organisms/CharHeader.css';
import ArrowImage from '@/assets/NavArrow.svg';

interface CharHeaderProps {
   name: string;
   number: number;
}

const CharHeader = ({ name, number }: CharHeaderProps) => {
   return (
      <div className="char__header">
         <div className="char__container">
            <div className="char__nav">
               <NavArrow image={ArrowImage} />
               <Text as="h1">{name || 'Pokémon Name'}</Text>
            </div>
            <Text as="h5">#{number || '999'}</Text>
         </div>
      </div>
   );
};

export default CharHeader;
