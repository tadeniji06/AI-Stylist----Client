import React, { useEffect, useRef } from "react";
import LazyDash from "../ui/LazyDash";
import { useAuth } from "../../context/Useauth";
import useUser from "../../hooks/useUser";
import gsap from "gsap";

const Greeting = () => {
  const { isAuthenticated } = useAuth();
  const { user, loading, error } = useUser();

  const greetingRef = useRef(null);
  const weatherRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Initial entrance animation
      tl.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      });

      // Greeting animation
      gsap.to(greetingRef.current, {
        y: [-20, 0],
        rotation: [-3, 3],
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
        repeat: -1,
      });

      // Weather text animation
      gsap.to(weatherRef.current, {
        y: -15,
        scale: 1.02,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      return () => {
        gsap.killTweensOf([greetingRef.current, weatherRef.current]);
      };
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return <LazyDash />;
  }

  if (!isAuthenticated) {
    return (
      <div className='flex items-center justify-center h-[50vh]'>
        <span className='text-4xl font-bold text-primary-grey animate-pulse'>
          Please log in to view Dashboard
        </span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className='flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 mt-4'
    >
      <h1
        ref={greetingRef}
        className='text-primary-green font-bold text-4xl md:text-5xl'
      >
        Welcome {user.nickname}!
      </h1>
      <p
        ref={weatherRef}
        className='font-bold text-primary-grey text-xl md:text-2xl text-center md:text-left'
      >
        How's the weather today in {user.state}, {user.country}?
      </p>
      {error && (
        <p className='text-red-500 font-bold absolute bottom-4 right-4'>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Greeting;
