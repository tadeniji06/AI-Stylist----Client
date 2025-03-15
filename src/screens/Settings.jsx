import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import useUser from "../hooks/useUser";
import { useAuth } from "../context/Useauth";

const Settings = () => {
  const { user, loading, error } = useUser();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    favoriteColor: "",
    gender: "",
    age: "",
    country: "",
    state: "",
  });
  const [notification, setNotification] = useState(null);

  // Initialize form data when user data is loaded
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setFormData({
        nickname: user.nickname || "",
        email: user.email || "",
        favoriteColor: user.favoriteColor || "",
        gender: user.gender || "",
        age: user.age || "",
        country: user.country || "",
        state: user.state || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // In a real app, this would make an API call to update user data
    try {
      // Mock API call
      // await updateUserProfile(formData);

      // Show success notification
      setNotification({
        type: "success",
        message: "Profile updated successfully!",
      });

      setIsEditing(false);

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (err) {
      setNotification({
        type: "error",
        message: "Failed to update profile. Please try again.",
      });
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-green'></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className='container mx-auto px-4 py-8 text-center'>
        <Icon
          icon='mdi:account-lock'
          className='text-6xl text-gray-400 mx-auto mb-4'
        />
        <h2 className='text-2xl font-bold mb-2'>
          Authentication Required
        </h2>
        <p className='text-gray-600 mb-6'>
          Please sign in to access your settings
        </p>
        <button className='bg-primary-green text-white px-6 py-2 rounded-lg'>
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <motion.h1
        className='text-3xl font-bold text-primary-green mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Account Settings
      </motion.h1>

      {/* Notification */}
      {notification && (
        <motion.div
          className={`mb-6 p-4 rounded-lg ${
            notification.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className='flex items-center'>
            <Icon
              icon={
                notification.type === "success"
                  ? "mdi:check-circle"
                  : "mdi:alert-circle"
              }
              className='mr-2 text-xl'
            />
            <p>{notification.message}</p>
          </div>
        </motion.div>
      )}

      <div className='flex flex-col md:flex-row gap-8'>
        {/* Sidebar */}
        <div className='md:w-1/4'>
          <div className='bg-white rounded-xl shadow-md overflow-hidden'>
            <div className='p-6 bg-gray-50 border-b'>
              <div className='flex items-center'>
                <div className='w-16 h-16 rounded-full bg-primary-green text-white flex items-center justify-center text-2xl font-bold mr-4'>
                  {user.nickname
                    ? user.nickname.charAt(0).toUpperCase()
                    : "U"}
                </div>
                <div>
                  <h3 className='font-bold text-lg'>
                    {user.nickname || "User"}
                  </h3>
                  <p className='text-gray-500 text-sm'>{user.email}</p>
                </div>
              </div>
            </div>

            <nav className='p-4'>
              <ul className='space-y-1'>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeTab === "profile"
                        ? "bg-primary-green bg-opacity-10 text-primary-green"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <Icon icon='mdi:account' className='mr-3 text-xl' />
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeTab === "preferences"
                        ? "bg-primary-green bg-opacity-10 text-primary-green"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("preferences")}
                  >
                    <Icon icon='mdi:palette' className='mr-3 text-xl' />
                    Style Preferences
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeTab === "subscription"
                        ? "bg-primary-green bg-opacity-10 text-primary-green"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("subscription")}
                  >
                    <Icon icon='mdi:crown' className='mr-3 text-xl' />
                    Subscription
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeTab === "security"
                        ? "bg-primary-green bg-opacity-10 text-primary-green"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("security")}
                  >
                    <Icon
                      icon='mdi:shield-lock'
                      className='mr-3 text-xl'
                    />
                    Security
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeTab === "notifications"
                        ? "bg-primary-green bg-opacity-10 text-primary-green"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Icon icon='mdi:bell' className='mr-3 text-xl' />
                    Notifications
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className='md:w-3/4'>
          <motion.div
            className='bg-white rounded-xl shadow-md p-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={activeTab}
          >
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div>
                <div className='flex justify-between items-center mb-6'>
                  <h2 className='text-2xl font-bold'>
                    Profile Information
                  </h2>
                  {!isEditing ? (
                    <button
                      className='bg-primary-green text-white px-4 py-2 rounded-lg flex items-center'
                      onClick={() => setIsEditing(true)}
                    >
                      <Icon icon='mdi:pencil' className='mr-2' />
                      Edit
                    </button>
                  ) : (
                    <button
                      className='text-gray-500 hover:text-gray-700'
                      onClick={() => {
                        setIsEditing(false);
                        // Reset form data to original user data
                        if (user) {
                          setFormData({
                            nickname: user.nickname || "",
                            email: user.email || "",
                            favoriteColor: user.favoriteColor || "",
                            gender: user.gender || "",
                            age: user.age || "",
                            country: user.country || "",
                            state: user.state || "",
                          });
                        }
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Nickname
                        </label>
                        <input
                          type='text'
                          name='nickname'
                          value={formData.nickname}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        />
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Email
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                          disabled
                        />
                        <p className='text-xs text-gray-500 mt-1'>
                          Email cannot be changed
                        </p>
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Favorite Color
                        </label>
                        <input
                          type='text'
                          name='favoriteColor'
                          value={formData.favoriteColor}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        />
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Gender
                        </label>
                        <select
                          name='gender'
                          value={formData.gender}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        >
                          <option value=''>Select gender</option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                          <option value='non-binary'>Non-binary</option>
                          <option value='prefer-not-to-say'>
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Age
                        </label>
                        <input
                          type='number'
                          name='age'
                          value={formData.age}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        />
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          Country
                        </label>
                        <input
                          type='text'
                          name='country'
                          value={formData.country}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        />
                      </div>
                      <div>
                        <label className='block text-gray-700 mb-2'>
                          State/City
                        </label>
                        <input
                          type='text'
                          name='state'
                          value={formData.state}
                          onChange={handleInputChange}
                          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        />
                      </div>
                    </div>
                    <div className='mt-8'>
                      <button
                        type='submit'
                        className='bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors'
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Nickname</h3>
                      <p className='font-medium'>
                        {user.nickname || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Email</h3>
                      <p className='font-medium'>{user.email}</p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>
                        Favorite Color
                      </h3>
                      <p className='font-medium'>
                        {user.favoriteColor || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Gender</h3>
                      <p className='font-medium capitalize'>
                        {user.gender || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Age</h3>
                      <p className='font-medium'>
                        {user.age || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Age</h3>
                      <p className='font-medium'>
                        {user.age || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>Country</h3>
                      <p className='font-medium'>
                        {user.country || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>State/City</h3>
                      <p className='font-medium'>
                        {user.state || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-500 text-sm'>
                        Account Created
                      </h3>
                      <p className='font-medium'>
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "Unknown"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Style Preferences Tab */}
            {activeTab === "preferences" && (
              <div>
                <h2 className='text-2xl font-bold mb-6'>
                  Style Preferences
                </h2>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>
                    Fashion Style
                  </h3>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {[
                      "Casual",
                      "Formal",
                      "Sporty",
                      "Bohemian",
                      "Vintage",
                      "Minimalist",
                      "Streetwear",
                      "Business Casual",
                    ].map((style) => (
                      <label
                        key={style}
                        className='flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50'
                      >
                        <input
                          type='checkbox'
                          className='mr-2 h-5 w-5 text-primary-green'
                        />
                        {style}
                      </label>
                    ))}
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>
                    Favorite Colors
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {[
                      "Black",
                      "White",
                      "Blue",
                      "Red",
                      "Green",
                      "Yellow",
                      "Purple",
                      "Pink",
                      "Brown",
                      "Gray",
                      "Orange",
                      "Teal",
                    ].map((color) => (
                      <label
                        key={color}
                        className={`px-4 py-2 rounded-full border cursor-pointer ${
                          color.toLowerCase() ===
                          user.favoriteColor?.toLowerCase()
                            ? "bg-primary-green text-white"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <input type='checkbox' className='sr-only' />
                        {color}
                      </label>
                    ))}
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>
                    Fit Preferences
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-gray-700 mb-2'>
                        Tops
                      </label>
                      <select className='w-full p-3 border border-gray-300 rounded-lg'>
                        <option>Slim Fit</option>
                        <option>Regular Fit</option>
                        <option>Loose Fit</option>
                        <option>Oversized</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-gray-700 mb-2'>
                        Bottoms
                      </label>
                      <select className='w-full p-3 border border-gray-300 rounded-lg'>
                        <option>Skinny</option>
                        <option>Slim</option>
                        <option>Regular</option>
                        <option>Relaxed</option>
                        <option>Wide Leg</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>Occasions</h3>
                  <p className='text-gray-600 mb-3'>
                    Select the occasions you typically dress for:
                  </p>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {[
                      "Casual Day",
                      "Work/Office",
                      "Workout",
                      "Date Night",
                      "Formal Event",
                      "Party",
                      "Travel",
                      "Outdoor Activity",
                    ].map((occasion) => (
                      <label
                        key={occasion}
                        className='flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50'
                      >
                        <input
                          type='checkbox'
                          className='mr-2 h-5 w-5 text-primary-green'
                        />
                        {occasion}
                      </label>
                    ))}
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button className='bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors'>
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Subscription Tab */}
            {activeTab === "subscription" && (
              <div>
                <h2 className='text-2xl font-bold mb-6'>Subscription</h2>

                <div className='bg-gray-50 rounded-lg p-6 mb-8'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <h3 className='font-bold text-lg'>Current Plan</h3>
                      <p className='text-gray-600'>Free Plan</p>
                    </div>
                    <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                      Active
                    </span>
                  </div>
                  <p className='text-gray-600 mb-4'>
                    You're currently on the free plan with limited
                    features. Upgrade to unlock premium features.
                  </p>
                  <button className='bg-primary-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors'>
                    Upgrade Now
                  </button>
                </div>

                <h3 className='font-medium text-lg mb-4'>
                  Available Plans
                </h3>
                <div className='grid md:grid-cols-3 gap-6 mb-8'>
                  <div className='border rounded-lg overflow-hidden'>
                    <div className='p-4 bg-gray-50 border-b'>
                      <h4 className='font-bold'>Basic</h4>
                      <p className='text-2xl font-bold mt-2'>
                        $4.99
                        <span className='text-sm font-normal text-gray-500'>
                          /month
                        </span>
                      </p>
                    </div>
                    <div className='p-4'>
                      <ul className='space-y-2'>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Basic wardrobe management</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Limited outfit suggestions</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Weather-based recommendations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='border rounded-lg overflow-hidden relative'>
                    <div className='absolute top-0 right-0 bg-primary-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg'>
                      POPULAR
                    </div>
                    <div className='p-4 bg-gray-50 border-b'>
                      <h4 className='font-bold'>Pro</h4>
                      <p className='text-2xl font-bold mt-2'>
                        $9.99
                        <span className='text-sm font-normal text-gray-500'>
                          /month
                        </span>
                      </p>
                    </div>
                    <div className='p-4'>
                      <ul className='space-y-2'>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Unlimited wardrobe items</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Advanced outfit suggestions</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Occasion-based styling</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Style history analytics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='border rounded-lg overflow-hidden'>
                    <div className='p-4 bg-gray-50 border-b'>
                      <h4 className='font-bold'>Elite</h4>
                      <p className='text-2xl font-bold mt-2'>
                        $19.99
                        <span className='text-sm font-normal text-gray-500'>
                          /month
                        </span>
                      </p>
                    </div>
                    <div className='p-4'>
                      <ul className='space-y-2'>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>All Pro features</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Personal stylist consultations</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Brand recommendations</span>
                        </li>
                        <li className='flex items-start'>
                          <Icon
                            icon='mdi:check'
                            className='text-primary-green mr-2 mt-1 flex-shrink-0'
                          />
                          <span>Custom color analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='font-medium text-lg mb-4'>
                    Billing History
                  </h3>
                  <div className='bg-gray-50 rounded-lg p-6 text-center'>
                    <Icon
                      icon='mdi:receipt'
                      className='text-4xl text-gray-400 mx-auto mb-2'
                    />
                    <p className='text-gray-600'>
                      No billing history available
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div>
                <h2 className='text-2xl font-bold mb-6'>Security</h2>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>
                    Change Password
                  </h3>
                  <form className='space-y-4'>
                    <div>
                      <label className='block text-gray-700 mb-2'>
                        Current Password
                      </label>
                      <input
                        type='password'
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        placeholder='Enter your current password'
                      />
                    </div>
                    <div>
                      <label className='block text-gray-700 mb-2'>
                        New Password
                      </label>
                      <input
                        type='password'
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        placeholder='Enter new password'
                      />
                    </div>
                    <div>
                      <label className='block text-gray-700 mb-2'>
                        Confirm New Password
                      </label>
                      <input
                        type='password'
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:outline-none'
                        placeholder='Confirm new password'
                      />
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='bg-primary-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors'
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>

                <div className='mb-8'>
                  <h3 className='font-medium text-lg mb-4'>
                    Two-Factor Authentication
                  </h3>
                  <div className='bg-gray-50 p-6 rounded-lg'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium mb-1'>
                          Enhance your account security
                        </p>
                        <p className='text-gray-600 text-sm'>
                          Two-factor authentication adds an extra layer of
                          security to your account
                        </p>
                      </div>
                      <button className='bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg'>
                        Enable
                      </button>
                    </div>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='font-medium text-lg mb-4 text-red-600'>
                    Danger Zone
                  </h3>
                  <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                    <h4 className='font-medium mb-2'>Delete Account</h4>
                    <p className='text-gray-600 mb-4'>
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <button className='bg-white border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors'>
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div>
                <h2 className='text-2xl font-bold mb-6'>
                  Notification Settings
                </h2>

                <div className='space-y-6'>
                  <div className='border-b pb-4'>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='font-medium'>
                          Email Notifications
                        </h3>
                        <p className='text-gray-500 text-sm'>
                          Manage email notification preferences
                        </p>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          className='sr-only peer'
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-green"></div>
                      </label>
                    </div>

                    <div className='ml-6 space-y-3'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='email-outfit'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='email-outfit'>
                          Outfit recommendations
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='email-tips'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='email-tips'>
                          Style tips and trends
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='email-account'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='email-account'>
                          Account updates
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='email-promo'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                        />
                        <label htmlFor='email-promo'>
                          Promotional offers
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='border-b pb-4'>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='font-medium'>Push Notifications</h3>
                        <p className='text-gray-500 text-sm'>
                          Manage mobile app notification preferences
                        </p>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          className='sr-only peer'
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-green"></div>
                      </label>
                    </div>

                    <div className='ml-6 space-y-3'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='push-daily'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='push-daily'>
                          Daily outfit suggestions
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='push-weather'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='push-weather'>
                          Weather-based outfit alerts
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='push-events'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                          defaultChecked
                        />
                        <label htmlFor='push-events'>
                          Event reminders
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='push-updates'
                          className='mr-3 h-4 w-4 text-primary-green rounded'
                        />
                        <label htmlFor='push-updates'>App updates</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='font-medium'>
                          Notification Frequency
                        </h3>
                        <p className='text-gray-500 text-sm'>
                          How often would you like to receive
                          notifications?
                        </p>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='freq-daily'
                          name='frequency'
                          className='mr-3 h-4 w-4 text-primary-green'
                          defaultChecked
                        />
                        <label htmlFor='freq-daily'>Daily</label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='freq-weekly'
                          name='frequency'
                          className='mr-3 h-4 w-4 text-primary-green'
                        />
                        <label htmlFor='freq-weekly'>Weekly digest</label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='freq-important'
                          name='frequency'
                          className='mr-3 h-4 w-4 text-primary-green'
                        />
                        <label htmlFor='freq-important'>
                          Important updates only
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <button className='bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors'>
                    Save Notification Preferences
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
