import LogoImg from '@/assets/Logo.svg';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '@/styles/molecules/Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
   return (
      <Link className="logo" to="/">
         <Image src={LogoImg} alt="Pokedex logo" width={24} height={24} />
         <Text as="h1">Pokédex</Text>
      </Link>
   );
};

export default Logo;
