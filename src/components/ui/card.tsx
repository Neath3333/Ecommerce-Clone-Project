
import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};