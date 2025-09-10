// import '@/styles/atoms/ProgressBar.css';

interface ProgressBarProps {
   percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
   return (
      <div className="progress-bar">
         <div
            className="progress-bar__fill"
            style={{ width: `${percentage}%` }}
         />
      </div>
   );
};

export default ProgressBar;
