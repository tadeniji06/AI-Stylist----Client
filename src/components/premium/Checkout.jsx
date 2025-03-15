import React from 'react';
import  { motion } from 'framer-motion';
import { plans } from '../../utils/data';
import { Icon } from '@iconify/react';

const Checkout = ({selectedPlan, billingCycle}) => {
  return (
   <div id='checkout-section' className='max-w-2xl mx-auto'>
   {selectedPlan && (
     <motion.div
       className='bg-white rounded-xl shadow-lg p-8'
       initial={{ opacity: 0, scale: 0.9 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.3 }}
     >
       <h2 className='text-2xl font-bold mb-6'>
         Complete Your Subscription
       </h2>
       <div className='mb-6 p-4 bg-gray-50 rounded-lg'>
         <div className='flex justify-between mb-2'>
           <span className='font-medium'>Selected Plan:</span>
           <span className='font-bold'>
             {plans.find((p) => p.id === selectedPlan)?.name}
           </span>
         </div>
         <div className='flex justify-between'>
           <span className='font-medium'>Billing:</span>
           <span>
             $
             {billingCycle === "monthly"
               ? plans.find((p) => p.id === selectedPlan)
                   ?.monthlyPrice
               : plans.find((p) => p.id === selectedPlan)
                   ?.yearlyPrice}
             /{billingCycle === "monthly" ? "month" : "year"}
           </span>
         </div>
       </div>

       <form className='space-y-4'>
         <div>
           <label className='block text-gray-700 mb-2'>
             Card Number
           </label>
           <input
             type='text'
             placeholder='1234 5678 9012 3456'
             className='w-full p-3 border border-gray-300 rounded-lg'
           />
         </div>
         <div className='grid grid-cols-2 gap-4'>
           <div>
             <label className='block text-gray-700 mb-2'>
               Expiry Date
             </label>
             <input
               type='text'
               placeholder='MM/YY'
               className='w-full p-3 border border-gray-300 rounded-lg'
             />
           </div>
           <div>
             <label className='block text-gray-700 mb-2'>CVC</label>
             <input
               type='text'
               placeholder='123'
               className='w-full p-3 border border-gray-300 rounded-lg'
             />
           </div>
         </div>
         <div>
           <label className='block text-gray-700 mb-2'>
             Name on Card
           </label>
           <input
             type='text'
             placeholder='John Doe'
             className='w-full p-3 border border-gray-300 rounded-lg'
           />
         </div>
         <button
           type='button'
           className='w-full py-3 bg-primary-green text-white font-medium rounded-lg hover:bg-opacity-90 transition-opacity'
         >
           Subscribe Now
         </button>
       </form>
       <p className='text-sm text-gray-500 mt-4 text-center'>
         You can cancel your subscription at any time from your
         account settings.
       </p>
     </motion.div>
   )}

   {!selectedPlan && (
     <div className='text-center py-8'>
       <p className='text-gray-500 mb-4'>
         Select a plan above to continue
       </p>
       <Icon
         icon='mdi:arrow-up'
         className='text-primary-green text-3xl animate-bounce'
       />
     </div>
   )}
 </div>
  )
}

export default Checkout