'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Mee from "../app/mee.jpg";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero animations
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate name
      tl.fromTo(
        nameRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Animate title
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      );

      // Animate profile card
      tl.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: -50,
          rotateY: -15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      );

      // Animate CTA buttons
      tl.fromTo(
        Array.from(ctaRef.current?.children || []),
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      );

      // Scroll-triggered animation for the entire hero
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(heroRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-portfolio-light mt-16 pt-10"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Card */}
        <div ref={cardRef} className="flex justify-center lg:justify-end">
          <Card className="bg-surface-light border-portfolio shadow-2xl max-w-sm w-full transform perspective-1000">
            <CardContent className="p-8 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-accent dark:ring-accent-dark ring-offset-4 ring-offset-surface dark:ring-offset-surface-dark">
                <AvatarImage
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHBPawoc1xFbw/profile-displayphoto-shrink_200_200/B4DZbge_qDHEAY-/0/1747522944307?e=1756339200&v=beta&t=MP8vva7DCKZU17EhRG_zSt0Wt85WL_ibLHF5LXNUVcw"
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-accent dark:bg-accent-dark text-white">
                  SHAHID ADNAN
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-portfolio-secondary text-sm font-medium uppercase tracking-wide">
                  Front-End Developer
                </p>
                <p className="text-portfolio-primary text-base leading-relaxed">
                  Passionate about creating beautiful, functional web experiences with modern technologies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-portfolio-primary leading-tight"
            >
              Shahid Adnan 
              <span className="block text-portfolio-accent text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Developer
              </span>
            </h1>
            <p
              ref={titleRef}
              className="text-lg sm:text-xl text-portfolio-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting exceptional digital experiences through clean code, innovative design, and user-centered development. Let's build something amazing together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-accent dark:bg-accent-dark hover:bg-accent/90 dark:hover:bg-accent-dark/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-surface-light border-portfolio hover:bg-portfolio-light text-portfolio-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-portfolio-secondary hover:text-portfolio-primary hover:bg-portfolio-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection