import React from 'react';
import { plans } from '../../utils/data';
import { Icon } from '@iconify/react';

const Features = () => {
  return (
   <div className='mb-16'>
   <h2 className='text-3xl font-bold text-center mb-8'>
     Feature Comparison
   </h2>
   <div className='overflow-x-auto'>
     <table className='w-full border-collapse'>
       <thead>
         <tr className='bg-gray-100'>
           <th className='p-4 text-left'>Feature</th>
           {plans.map((plan) => (
             <th key={plan.id} className='p-4 text-center'>
               {plan.name}
             </th>
           ))}
         </tr>
       </thead>
       <tbody>
         <tr className='border-b'>
           <td className='p-4 font-medium'>Wardrobe Items</td>
           <td className='p-4 text-center'>50 items</td>
           <td className='p-4 text-center'>Unlimited</td>
           <td className='p-4 text-center'>Unlimited</td>
         </tr>
         <tr className='border-b'>
           <td className='p-4 font-medium'>Outfit Suggestions</td>
           <td className='p-4 text-center'>5/day</td>
           <td className='p-4 text-center'>20/day</td>
           <td className='p-4 text-center'>Unlimited</td>
         </tr>
         <tr className='border-b'>
           <td className='p-4 font-medium'>AI Styling</td>
           <td className='p-4 text-center'>Basic</td>
           <td className='p-4 text-center'>Advanced</td>
           <td className='p-4 text-center'>Premium</td>
         </tr>
         <tr className='border-b'>
           <td className='p-4 font-medium'>Style Analytics</td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:close'
               className='text-red-500 mx-auto'
             />
           </td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:check'
               className='text-primary-green mx-auto'
             />
           </td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:check'
               className='text-primary-green mx-auto'
             />
           </td>
         </tr>
         <tr className='border-b'>
           <td className='p-4 font-medium'>Personal Stylist</td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:close'
               className='text-red-500 mx-auto'
             />
           </td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:close'
               className='text-red-500 mx-auto'
             />
           </td>
           <td className='p-4 text-center'>
             <Icon
               icon='mdi:check'
               className='text-primary-green mx-auto'
             />
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 </div>
  )
}

export default Features