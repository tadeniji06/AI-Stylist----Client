import React from "react";

const Billing = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className='flex justify-center mb-12'>
      <div className='bg-gray-100 p-1 rounded-full flex items-center'>
        <button
          className={`px-6 py-2 rounded-full ${
            billingCycle === "monthly"
              ? "bg-white shadow-md text-primary-green"
              : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            billingCycle === "yearly"
              ? "bg-white shadow-md text-primary-green"
              : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
          <span className='ml-1 text-xs font-bold text-primary-green'>
            (Save 20%)
          </span>
        </button>
      </div>
    </div>
  );
};

export default Billing;
