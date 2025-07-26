'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        Array.from(contentRef.current?.children || []),
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-primary mb-6"
          >
            Get In Touch
          </h2>
          <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div ref={contentRef} className="space-y-8">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-portfolio-light border-portfolio hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent dark:bg-accent-dark rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-primary mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.href}
                    className="text-portfolio-secondary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-portfolio-light border-portfolio shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-portfolio-primary mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-portfolio-secondary mb-6 max-w-2xl mx-auto">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent dark:bg-accent-dark hover:bg-accent/90 dark:hover:bg-accent-dark/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-portfolio-secondary ${social.color} transition-colors duration-300 transform hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}