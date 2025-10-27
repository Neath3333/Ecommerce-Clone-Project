
import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className = "", style }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`} style={style}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardHeader = ({ children, className = "", style }: CardHeaderProps) => {
  return (
    <div className={`p-6 pb-2 ${className}`} style={style}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardTitle = ({ children, className = "", style }: CardTitleProps) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 leading-tight ${className}`} style={style}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardDescription = ({ children, className = "", style }: CardDescriptionProps) => {
  return (
    <p className={`text-sm text-gray-600 mt-1 ${className}`} style={style}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardContent = ({ children, className = "", style }: CardContentProps) => {
  return (
    <div className={`p-6 pt-2 ${className}`} style={style}>
      {children}
    </div>
  );
};