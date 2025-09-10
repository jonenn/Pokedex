import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '@/styles/molecules/InfoItem.css';

interface AboutItemProps {
   image: string;
   icon: 'weight' | 'height';
   value: string;
   label: string;
}

const AboutItem = ({ icon, value, label }: AboutItemProps) => {
   return (
      <div className="info-item">
         <Image src={icon} alt={label} />
         <Text>{value}</Text>
         <Text>{label}</Text>
      </div>
   );
};

export default AboutItem;
