import React from 'react';
import { cn } from '../../lib/utils';

interface GlowBorderProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const radiusMap = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

const GlowBorder = ({ children, className, innerClassName, radius = 'xl' }: GlowBorderProps) => {
  const r = radiusMap[radius];
  return (
    <div className={cn('relative group', className)}>
      {/* Outer glow layer */}
      <div
        className={cn(
          'absolute inset-0 z-[-1] overflow-hidden blur-[3px]',
          r,
          'before:absolute before:content-[""] before:z-[-2] before:w-[999px] before:h-[999px]',
          'before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
          'before:bg-[conic-gradient(#000,#1d4ed8_5%,#000_38%,#000_50%,#0ea5e9_60%,#000_87%)]',
          'before:transition-all before:duration-[2000ms] before:rotate-60',
          'group-hover:before:rotate-[-120deg]',
        )}
      />
      {/* Inner soft glow */}
      <div
        className={cn(
          'absolute inset-[1px] z-[-1] overflow-hidden blur-[2px]',
          r,
          'before:absolute before:content-[""] before:z-[-2] before:w-[600px] before:h-[600px]',
          'before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
          'before:bg-[conic-gradient(rgba(0,0,0,0),#1e3a8a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#0369a1,rgba(0,0,0,0)_60%)]',
          'before:transition-all before:duration-[2000ms] before:rotate-[82deg]',
          'group-hover:before:rotate-[-98deg]',
        )}
      />
      {/* Highlight ring */}
      <div
        className={cn(
          'absolute inset-[2px] z-[-1] overflow-hidden blur-[1px]',
          r,
          'before:absolute before:content-[""] before:z-[-2] before:w-[600px] before:h-[600px]',
          'before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
          'before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#60a5fa,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#38bdf8,rgba(0,0,0,0)_58%)]',
          'before:brightness-125 before:transition-all before:duration-[2000ms] before:rotate-[83deg]',
          'group-hover:before:rotate-[-97deg]',
        )}
      />
      {/* Content */}
      <div className={cn('relative', r, innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default GlowBorder;
