import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Height from '@/assets/Height.svg';
import Weight from '@/assets/Weight.svg';
import '@/styles/molecules/AboutItem.css';

interface AboutItemProps {
   icon: 'weight' | 'height';
   value: string;
   label: string;
}

const AboutItem = ({ icon, value, label }: AboutItemProps) => {
   return (
      <div className="about-item">
         <div className="about-item__container">
            <Image src={icon === 'weight' ? Weight : Height} alt={label} />
            <Text className="about-item__value">{value}</Text>
         </div>
         <Text className="about-item__label">{label}</Text>
      </div>
   );
};

export default AboutItem;
