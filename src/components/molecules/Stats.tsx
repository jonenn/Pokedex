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
         <Text>{label}</Text>
         <Text>{value}</Text>
         <ProgressBar value={value} />
      </div>
   );
};

export default Stats;
