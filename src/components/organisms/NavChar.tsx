import Image from '../atoms/Image';
import '@/styles/organisms/NavChar.css';
import NavArrow from '../molecules/NavArrow';
import LeftArrow from '@/assets/LeftArrow.svg';
import RightArrow from '@/assets/RightArrow.svg';
import Label from '../atoms/Label';

interface NavCharProps {
   image: string;
   next: string;
   previous: string;
   type: string[];
}

const NavChar = ({ image, next, previous, type }: NavCharProps) => {
   return (
      <>
         <div className="nav-char">
            <NavArrow to={previous || '#'} image={LeftArrow} />
            <Image
               src={
                  image ||
                  'https://res.cloudinary.com/dedihqcsy/image/upload/v1757531128/Silhouette_xzwzdy.png'
               }
               className="nav-char__image"
               alt="Pokemon Character"
            />
            <NavArrow to={next || '#'} image={RightArrow} />
         </div>
         <div className="nav-char__labels">
            {type.map((t) => (
               <Label key={t} type={t} />
            ))}
         </div>
      </>
   );
};

export default NavChar;
