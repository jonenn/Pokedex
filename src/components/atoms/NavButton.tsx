import { Link } from 'react-router-dom';

interface NavButtonProps {
   to: string;
   children?: React.ReactNode;
}

const NavButton = ({ to, children, ...props }: NavButtonProps) => {
   return (
      <Link to={to} {...props}>
         {children}
      </Link>
   );
};

export default NavButton;
