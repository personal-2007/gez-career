import React from 'react';

export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer border-none outline-none';
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30',
    secondary: 'bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/10',
    gradient: 'btn-gradient',
    outline: 'bg-transparent border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10',
    danger: 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base font-semibold'
  };

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
