import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  return (
   <div className='text-center mb-16'>
   <motion.h1
     className='text-4xl md:text-5xl font-bold text-primary-green mb-4'
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
     Upgrade Your Style Experience
   </motion.h1>
   <motion.p
     className='text-xl text-gray-600 max-w-2xl mx-auto'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5, delay: 0.2 }}
   >
     Unlock premium features to elevate your wardrobe management and
     receive personalized styling recommendations from our AI.
   </motion.p>
 </div>
  )
}

export default Header