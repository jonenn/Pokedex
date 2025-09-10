import '@/styles/molecules/Card.css';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import { Link } from 'react-router-dom';

interface MainProps {
   className?: string;
   number: number;
   image: string;
   title: string;
}

const Card = ({ number, image, title, className = '' }: MainProps) => {
   return (
      <Link to={`/pokemon/${number}`} className={`card ${className}`}>
         <div className="card__content">
            <Text className="card__number">#{number}</Text>
            <Image
               src={
                  image ||
                  'https://res.cloudinary.com/dedihqcsy/image/upload/v1757531128/Silhouette_xzwzdy.png'
               }
               className="card__image"
               alt="Pokemon Character"
               width={72}
               height={72}
            />
            <Text className="card__title">{title}</Text>
         </div>
         <div className="card__background"></div>
      </Link>
   );
};

export default Card;
