import ArrowImage from '@/assets/NavArrow.svg';
import Image from '../atoms/Image';
import '@/styles/molecules/Logo.css';
import NavButton from '../atoms/NavButton';

const NavArrow = () => {
   return (
      <NavButton to="/">
         <Image src={ArrowImage} alt="Go back home" width={24} height={24} />
      </NavButton>
   );
};

export default NavArrow;
