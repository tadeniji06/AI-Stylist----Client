import React from 'react'

const Faq = () => {
  return (
   <div className='max-w-3xl mx-auto mt-20'>
   <h2 className='text-3xl font-bold text-center mb-8'>
     Frequently Asked Questions
   </h2>
   <div className='space-y-4'>
     <div className='bg-white rounded-lg shadow p-6'>
       <h3 className='font-bold text-lg mb-2'>
         Can I change my plan later?
       </h3>
       <p className='text-gray-600'>
         Yes, you can upgrade or downgrade your plan at any time.
         Changes will be applied at the start of your next billing
         cycle.
       </p>
     </div>
     <div className='bg-white rounded-lg shadow p-6'>
       <h3 className='font-bold text-lg mb-2'>
         How do I cancel my subscription?
       </h3>
       <p className='text-gray-600'>
         You can cancel your subscription from your account settings.
         Your premium features will remain active until the end of
         your current billing period.
       </p>
     </div>
     <div className='bg-white rounded-lg shadow p-6'>
       <h3 className='font-bold text-lg mb-2'>
         Is there a free trial?
       </h3>
       <p className='text-gray-600'>
         Yes, all new users get a 7-day free trial of the Pro plan
         when they sign up. You can explore premium features before
         deciding which plan is right for you.
       </p>
     </div>
     <div className='bg-white rounded-lg shadow p-6'>
       <h3 className='font-bold text-lg mb-2'>
         What payment methods do you accept?
       </h3>
       <p className='text-gray-600'>
         We accept all major credit cards, PayPal, and Apple Pay. All
         payments are securely processed and your information is never
         stored on our servers.
       </p>
     </div>
     <div className='bg-white rounded-lg shadow p-6'>
       <h3 className='font-bold text-lg mb-2'>
         Will my subscription automatically renew?
       </h3>
       <p className='text-gray-600'>
         Yes, your subscription will automatically renew at the end of
         each billing cycle. You'll receive an email reminder 3 days
         before renewal.
       </p>
     </div>
   </div>
 </div>
  )
}

export default Faq