// import '@/styles/organisms/StatsSection.css';
import Stats from '../molecules/Stats';

interface StatsSectionProps {
   stats: { label: string; value: number }[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
   return (
      <section className="stats-section">
         <h2 className="section-title">Base Stats</h2>
         <div className="stats-section__list">
            {stats.map((stat) => (
               <Stats key={stat.label} label={stat.label} value={stat.value} />
            ))}
         </div>
      </section>
   );
};

export default StatsSection;
