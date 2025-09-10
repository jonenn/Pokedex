import '@/styles/atoms/Text.css';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';

interface TextProps {
   children: React.ReactNode;
   as?: TextElement;
   className?: string;
}

const Text = ({ children, as: Component = 'p', className = '' }: TextProps) => {
   return <Component className={`${className}`}>{children}</Component>;
};

export default Text;
