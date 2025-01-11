import React from 'react';
import { clsx } from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        "text-gray-600 hover:text-[#B5CDA3] transition-colors duration-300",
        className
      )}
    >
      {children}
    </a>
  );
}