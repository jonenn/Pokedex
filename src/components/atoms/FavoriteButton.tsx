import React from 'react';
import '@/styles/atoms/FavoriteButton.css';

interface FavoriteButtonProps {
   isFavorite: boolean;
   onClick?: () => void;
   children?: React.ReactNode;
}

const FavoriteButton = ({
   isFavorite,
   onClick,
   ...props
}: FavoriteButtonProps) => (
   <button onClick={onClick} {...props}>
      {isFavorite ? '★' : '☆'}
   </button>
);

export default FavoriteButton;
