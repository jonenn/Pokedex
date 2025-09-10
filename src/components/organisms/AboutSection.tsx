import Text from '../atoms/Text';
import '@/styles/organisms/AboutSection.css';
import Abilities from '../molecules/Abilities';
import AboutItem from '../molecules/AboutItem';

interface AboutSectionProps {
   weight: string;
   height: string;
   abilities: string[];
   description: string;
}

const AboutSection = ({
   weight,
   height,
   abilities,
   description,
}: AboutSectionProps) => {
   return (
      <section className="about-section">
         <Text as="h4" className="section-title">
            About
         </Text>
         <div className="about-section__info">
            <AboutItem icon="weight" value={weight} label="Weight" />
            <AboutItem icon="height" value={height} label="Height" />
            <Abilities abilities={abilities} label="Moves" />
         </div>
         <Text className="about-section__description">{description}</Text>
      </section>
   );
};

export default AboutSection;
