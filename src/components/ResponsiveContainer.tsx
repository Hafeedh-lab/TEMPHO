import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md', 
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full'
};

const paddingClasses = {
  none: '',
  sm: 'px-4',
  md: 'px-6 md:px-8',
  lg: 'px-6 md:px-8 lg:px-12',
  xl: 'px-6 md:px-8 lg:px-12 xl:px-16'
};

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'lg'
}) => {
  return (
    <div 
      className={`
        w-full 
        mx-auto 
        ${maxWidthClasses[maxWidth]} 
        ${paddingClasses[padding]} 
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
