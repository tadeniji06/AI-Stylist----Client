import React, { useState } from "react";
import Header from "../components/premium/Header";
import Billing from "../components/premium/Billing";
import Pricing from "../components/premium/Pricing";
import Features from "../components/premium/Features";
import Checkout from "../components/premium/Checkout";
import Faq from "../components/premium/Faq";
import Testimonials from "../components/premium/Testimonials";
import CTA from "../components/premium/CTA";
const Premium = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    // In a real app, this would navigate to checkout or show payment options
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("checkout-section").offsetTop,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <Header />
      <Billing
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />

      {/* Pricing Cards */}
      <Pricing
        billingCycle={billingCycle}
        selectedPlan={selectedPlan}
        handleSelectPlan={handleSelectPlan}
      />

      {/* Features Comparison */}
      <Features />

      {/* Checkout Section */}
      <Checkout selectedPlan={selectedPlan} billingCycle={billingCycle} />

      {/* FAQ Section */}
      <Faq />

      {/* Testimonials */}
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Premium;
