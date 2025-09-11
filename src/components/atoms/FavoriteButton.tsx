import React, { useState } from 'react';
import '@/styles/atoms/FavoriteButton.css';

interface FavoriteButtonProps {
   isFavorite: boolean;
   onClick?: () => void;
   children?: React.ReactNode;
   className?: string;
}

const FavoriteButton = ({
   isFavorite,
   onClick,
   className,
   ...props
}: FavoriteButtonProps) => {
   const [hovered, setHovered] = useState(false);
   return (
      <button
         onClick={onClick}
         className={className}
         onFocus={() => setHovered(true)}
         {...props}
      >
         {hovered ? '☆' : isFavorite ? '★' : '☆'}
      </button>
   );
};

export default FavoriteButton;
