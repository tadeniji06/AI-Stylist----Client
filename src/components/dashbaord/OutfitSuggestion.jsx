import { useState } from "react";
import Button from "../ui/Button";
import toast from "react-hot-toast";

import { outfit } from "../../utils/media";

const OutfitSuggestion = () => {
  const [loading, setLoading] = useState(false);

  const handleSuggestion = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.error("No Suggestions Yet, Try Again Later", {
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl text-primary-green font-bold'>
          Today's Outfit Suggestions
        </h2>
        <div className='w-24 h-1 bg-primary-green mx-auto mt-4 rounded-full'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[1].map((item) => (
          <div
            key={item}
            className='relative group overflow-hidden rounded-xl transition-all duration-300 hover:scale-105'
          >
            <div className='aspect-square shadow-lg rounded-xl hover:shadow-xl'>
              {/* Placeholder for outfit image */}
              <img
                src={outfit}
                alt={`Outfit ${item}`}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white font-semibold'>Outfit {item}</p>
              <p className='text-white/80 text-sm'>
                Perfect for today's weather
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-8'>
        <Button
          className='bg-primary-green text-white font-bold disabled:opacity-70 disabled:cursor-not-allowed'
          title='Generate New Outfit'
          onClick={handleSuggestion}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default OutfitSuggestion;
