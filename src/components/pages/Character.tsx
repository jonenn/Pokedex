import '@/styles/pages/Character.css';
import CharTemplate from '../templates/CharTemplate';
import NavChar from '../organisms/NavChar';
import AboutSection from '../organisms/AboutSection';
import StatsSection from '../organisms/StatsSection';

const Character = () => {
   return (
      <CharTemplate>
         <NavChar type="Type" />
         <AboutSection
            weight="9.9 kg"
            height="9.9 m"
            abilities={['Ability 1', 'Ability 2']}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros."
         />

         <StatsSection
            stats={[
               { label: 'HP', value: 999 },
               { label: 'ATK', value: 999 },
               { label: 'DEF', value: 999 },
               { label: 'SATK', value: 999 },
               { label: 'SDEF', value: 999 },
               { label: 'SPD', value: 999 },
            ]}
         />
      </CharTemplate>
   );
};

export default Character;
