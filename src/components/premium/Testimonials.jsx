import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { testimonials } from "../../utils/data";
const Testimonials = () => {
  return (
    <div className='mt-20 mb-16'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        What Our Premium Users Say
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-xl shadow-lg p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <div className='flex items-center mb-4'>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full mr-4'
              />
              <div>
                <h4 className='font-bold'>{testimonial.name}</h4>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
              </div>
            </div>
            <p className='text-gray-600 italic'>"{testimonial.quote}"</p>
            <div className='mt-4 flex text-yellow-400'>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} icon='mdi:star' className='text-xl' />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
