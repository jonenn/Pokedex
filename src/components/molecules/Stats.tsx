import Text from '../atoms/Text';
import ProgressBar from '../atoms/ProgressBar';
import '@/styles/molecules/Stats.css';

interface StatsProps {
   label: string;
   value: number;
}

const Stats = ({ label, value }: StatsProps) => {
   return (
      <div className="stats">
         <Text className="stats__label">{label}</Text>
         <Text className="stats__value">{value}</Text>
         <div className="stats__progress">
            <ProgressBar percentage={value} />
         </div>
      </div>
   );
};

export default Stats;
