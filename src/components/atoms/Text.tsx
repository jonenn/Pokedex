type TextElement = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

interface TextProps {
   children: React.ReactNode;
   as?: TextElement;
   className?: string;
}

const Text = ({ children, as: Component = 'p', className = '' }: TextProps) => {
   return <Component className={`${className}`}>{children}</Component>;
};

export default Text;
