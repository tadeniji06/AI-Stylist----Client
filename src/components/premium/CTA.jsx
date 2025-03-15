import React from "react";

const CTA = () => {
  return (
    <div className='bg-primary-green text-white rounded-2xl p-8 md:p-12 text-center mt-16'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        Ready to Elevate Your Style?
      </h2>
      <p className='text-xl mb-8 max-w-2xl mx-auto'>
        Join thousands of fashion-forward users who have transformed their
        wardrobe with our AI-powered styling assistant.
      </p>
      <button
        className='bg-white text-primary-green font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Choose Your Plan
      </button>
      <p className='mt-4 text-sm opacity-80'>
        No commitment. Cancel anytime.
      </p>
    </div>
  );
};

export default CTA;
