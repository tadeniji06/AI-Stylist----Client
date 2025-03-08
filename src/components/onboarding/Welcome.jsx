import React, { useState, useEffect } from "react";
import { p1, p2, p3 } from "../../utils/media";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slides = [p1, p2, p3];
  const headlines = [
    "Dress to Impress, Effortlessly",
    "Weather-Perfect Outfits",
    "Your Style, Your Way",
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = slides.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const tl = gsap.timeline();

    tl.from(".slider-container", {
      scale: 0.8,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    })
      .from(".content-overlay", {
        y: 100,
        opacity: 0,
        duration: 1.5,
      })
      .from(".slide-indicators", {
        x: -50,
        opacity: 0,
        duration: 0.5,
      });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  useEffect(() => {
    if (!imagesLoaded) return;

    gsap.to(".slide-image", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.to(".slide-image", {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  }, [currentSlide, imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-primary-green'>
        <div className='text-white text-2xl'>
          Loading your style experience...
        </div>
      </div>
    );
  }

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='slider-container h-screen relative'>
        <img
          src={slides[currentSlide]}
          alt='Fashion'
          className='slide-image w-full h-full object-cover'
          style={{ opacity: 1 }}
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent'>
          <div className='content-overlay absolute inset-0 flex flex-col items-center justify-center text-white px-4'>
            <h1 className='text-6xl md:text-8xl font-bold text-center mb-8 leading-tight'>
              {headlines[currentSlide]}
            </h1>
            <p className='text-xl md:text-2xl text-center mb-12 max-w-2xl'>
              Experience the future of fashion with AI-powered personalized
              styling
            </p>
            <Link
              to='/signup'
              className='bg-primary-green hover:bg-secondary-green text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block'
            >
              Transform Your Style Now
            </Link>
          </div>
        </div>

        <div className='slide-indicators absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-primary-green w-8"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4'>
          {/* <div className='bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white flex items-center'>
            <Icon
              icon='fluent:weather-sunny-48-regular'
              className='mr-2'
            />
            Weather-Smart
          </div> */}
          {/* <div className='bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white flex items-center'>
            <Icon icon='mdi:mood' className='mr-2' />
            Mood-Based
          </div> */}
          <div className='bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white flex items-center'>
            <Icon icon='carbon:ai-status' className='mr-2' />
            AI-Powered
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
