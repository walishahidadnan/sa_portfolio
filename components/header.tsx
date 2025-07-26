'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ThemeToggle from './theme-toggle';
import { Button } from '@/components/ui/button';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-portfolio"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-portfolio-accent">
              Portfolio
            </h2>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-portfolio-secondary hover:text-portfolio-primary">
              About
            </Button>
            <Button variant="ghost" className="text-portfolio-secondary hover:text-portfolio-primary">
              Projects
            </Button>
            <Button variant="ghost" className="text-portfolio-secondary hover:text-portfolio-primary">
              Contact
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header