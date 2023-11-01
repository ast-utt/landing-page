import { ReactNode } from 'react';

type MenuButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const MenuButton = ({ children, onClick, className }: MenuButtonProps) => (
  <button
    onClick={onClick}
    className={`sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 
   hover:bg-orange-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${className}`}
  >
    {children}
  </button>
);
