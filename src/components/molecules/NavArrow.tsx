import Image from '../atoms/Image';
import '@/styles/molecules/Logo.css';
import NavButton from '../atoms/NavButton';

interface NavArrowProps {
   to?: string;
   image?: string;
}

const NavArrow = ({ to, image }: NavArrowProps) => {
   return (
      <NavButton to={to || '/'}>
         <Image src={image || ''} alt="Go back home" width={24} height={24} />
      </NavButton>
   );
};

export default NavArrow;
