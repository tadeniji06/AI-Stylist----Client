import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 z-50 px-6 py-3 rounded-full 
      bg-white border-2 border-primary-green
      shadow-lg transform transition-all duration-300 
      hover:scale-105 hover:bg-primary-green  hover:text-white
      flex items-center gap-2 group
      ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
      }`}
    >
      <span className='font-bold text-primary-green group-hover:text-white'>
        Back To Top
      </span>
      <Icon
        icon='mdi:arrow-up'
        className='text-primary-green text-2xl group-hover:text-white group-hover:animate-bounce'
      />
    </button>
  );
};

export default BackToTop;
