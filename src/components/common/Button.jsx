import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-bold transition-all rounded-full';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:translate-y-[-2px]',
    secondary: 'bg-white hover:bg-slate-100 text-blue-900 shadow-xl hover:translate-y-[-2px]',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900',
    cta: 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 shadow-lg'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};
