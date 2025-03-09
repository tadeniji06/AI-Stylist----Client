import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Icon } from '@iconify/react';

const NotFound = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    // Floating animation for the 404
    tl.to('.floating-404', {
      y: -20,
      duration: 1.5,
      ease: 'power1.inOut'
    })
    .to('.floating-404', {
      y: 0,
      duration: 1.5,
      ease: 'power1.inOut'
    });

    // Rotating spiral animation
    gsap.to('.spiral', {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    // Pulsing button animation
    gsap.to('.home-button', {
      scale: 1.1,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-green to-secondary-green flex items-center justify-center relative overflow-hidden">
      {/* Background spiral */}
      <div className="spiral absolute inset-0 opacity-10">
        <Icon 
          icon="mdi:spiral" 
          className="text-white w-full h-full"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="floating-404 text-9xl font-bold text-white mb-8">404</h1>
        <p className="text-2xl text-white mb-8">
          Oops! You've wandered into the style void
        </p>
        <Link 
          to="/" 
          className="home-button inline-block bg-white text-primary-green px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          Return to Fashion Paradise
        </Link>
      </div>

      {/* Floating fashion icons */}
      {['mdi:hanger', 'mdi:shoe-heel', 'mdi:sunglasses', 'mdi:hat-fedora'].map((icon, index) => (
        <Icon 
          key={index}
          icon={icon}
          className={`absolute text-white opacity-20 text-4xl animate-bounce`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
