import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-3 rounded-full font-medium transition-all duration-300',
        variant === 'primary' && 'bg-[#B5CDA3] text-white hover:bg-[#A9DFF7]',
        variant === 'outline' && 'border-2 border-[#B5CDA3] text-[#B5CDA3] hover:bg-[#B5CDA3]/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}