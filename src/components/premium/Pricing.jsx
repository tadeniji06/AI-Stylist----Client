import React from "react";
import { plans } from "../../utils/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Pricing = ({ billingCycle, selectedPlan, handleSelectPlan }) => {
  return (
    <div className='grid md:grid-cols-3 gap-8 mb-16'>
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          className={`rounded-xl overflow-hidden shadow-lg ${
            plan.recommended ? "ring-4 ring-primary-green" : ""
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          {plan.recommended && (
            <div className='bg-primary-green text-white text-center py-2 font-medium'>
              Most Popular
            </div>
          )}
          <div className='p-6'>
            <div
              className={`w-16 h-16 rounded-full ${plan.color} flex items-center justify-center mb-4`}
            >
              <Icon
                icon={
                  plan.id === "basic"
                    ? "mdi:hanger"
                    : plan.id === "pro"
                    ? "mdi:tshirt-crew"
                    : "mdi:crown"
                }
                className='text-white text-3xl'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
            <p className='text-gray-600 mb-4'>{plan.description}</p>
            <div className='mb-6'>
              <span className='text-4xl font-bold'>
                $
                {billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
              </span>
              <span className='text-gray-500'>
                /{billingCycle === "monthly" ? "month" : "year"}
              </span>
            </div>
            <button
              className={`w-full py-3 rounded-lg text-white font-medium ${
                plan.recommended ? "bg-primary-green" : "bg-gray-700"
              } hover:opacity-90 transition-opacity`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
            </button>
          </div>
          <div className='bg-gray-50 p-6'>
            <h4 className='font-medium mb-4'>What's included:</h4>
            <ul className='space-y-3'>
              {plan.features.map((feature, i) => (
                <li key={i} className='flex items-start'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-primary-green mr-2 text-xl flex-shrink-0 mt-0.5'
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Pricing;
