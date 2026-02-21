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
  const baseStyles = 'font-bold transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-blue-500/20',
    secondary: 'bg-white hover:bg-slate-50 text-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-slate-200',
    outline: 'bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm',
    cta: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105',
    ghost: 'bg-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50'
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
