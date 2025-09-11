import '@/styles/organisms/StatsSection.css';
import Text from '../atoms/Text';
import Stats from '../molecules/Stats';

interface StatsSectionProps {
   stats: { label: string; value: number }[];
}

const labels = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'];

const StatsSection = ({ stats }: StatsSectionProps) => {
   return (
      <section className="stats-section">
         <Text as="h4" className="stats-section--title">
            Base Stats
         </Text>
         <div className="stats-section__list">
            {stats.map((stat, index) => (
               <Stats
                  key={stat.label}
                  label={labels[index] + 1}
                  value={stat.value}
               />
            ))}
         </div>
      </section>
   );
};

export default StatsSection;
