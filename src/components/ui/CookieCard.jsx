import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CookieCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsent='));
    setIsVisible(!cookieConsent);
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; max-age=31536000; path=/";
    setIsVisible(false);
  };

  return isVisible ? (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white p-6 rounded-xl shadow-lg z-50"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        We value your privacy
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By continuing to use our site, you agree to our use of cookies.
      </p>
      <div className="flex">
        <Button
          onClick={handleAccept}
          className="w-full bg-primary-green text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          title="Got it!"
        />
      </div>
    </motion.div>
  ) : null;
};

export default CookieCard;
