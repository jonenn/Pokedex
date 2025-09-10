import Image from '../atoms/Image';
import '@/styles/organisms/NavChar.css';
import NavArrow from '../molecules/NavArrow';
import LeftArrow from '@/assets/LeftArrow.svg';
import RightArrow from '@/assets/RightArrow.svg';

interface NavCharProps {
   image?: string;
   next?: string;
   previous?: string;
}

const NavChar = ({ image, next, previous }: NavCharProps) => {
   return (
      <div className="nav-char">
         <NavArrow to={previous || '#'} image={LeftArrow} />
         <Image
            src={
               image ||
               'https://res.cloudinary.com/dedihqcsy/image/upload/v1757531128/Silhouette_xzwzdy.png'
            }
            style={{
               width: '54%',
               height: '54%',
               maxWidth: 300,
               maxHeight: 300,
               objectFit: 'contain',
            }}
            alt="Pokemon Character"
         />
         <NavArrow to={next || '#'} image={RightArrow} />
      </div>
   );
};

export default NavChar;
