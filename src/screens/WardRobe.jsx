import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import useUser from "../hooks/useUser";
import { motion } from "framer-motion";
import { outfit } from "../utils/media";
import { categories } from "../utils/data";
import UploadCloth from "../components/ui/UploadCloth";

const WardRobe = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("all");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Mock data - replace with actual API calls in production
  const [wardrobeItems, setWardrobeItems] = useState({
    tops: [
      {
        id: 1,
        name: "White T-Shirt",
        image: outfit,
        color: "white",
        category: "tops",
        season: "all",
      },
      {
        id: 2,
        name: "Blue Dress Shirt",
        image: outfit,
        color: "blue",
        category: "tops",
        season: "spring",
      },
      {
        id: 3,
        name: "Black Sweater",
        image: outfit,
        color: "black",
        category: "tops",
        season: "winter",
      },
    ],
    bottoms: [
      {
        id: 4,
        name: "Blue Jeans",
        image: outfit,
        color: "blue",
        category: "bottoms",
        season: "all",
      },
      {
        id: 5,
        name: "Black Dress Pants",
        image: outfit,
        color: "black",
        category: "bottoms",
        season: "all",
      },
    ],
    shoes: [
      {
        id: 6,
        name: "White Sneakers",
        image: outfit,
        color: "white",
        category: "shoes",
        season: "all",
      },
      {
        id: 7,
        name: "Brown Dress Shoes",
        image: outfit,
        color: "brown",
        category: "shoes",
        season: "all",
      },
    ],
    accessories: [
      {
        id: 8,
        name: "Silver Watch",
        image: outfit,
        color: "silver",
        category: "accessories",
        season: "all",
      },
      {
        id: 9,
        name: "Black Belt",
        image: outfit,
        color: "black",
        category: "accessories",
        season: "all",
      },
    ],
  });

  // Filter items based on active tab and search query
  useEffect(() => {
    let items = [];

    if (activeTab === "all") {
      Object.values(wardrobeItems).forEach((category) => {
        items = [...items, ...category];
      });
    } else {
      items = wardrobeItems[activeTab] || [];
    }

    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.season.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [activeTab, searchQuery, wardrobeItems]);

  // Mock function to handle item upload
  const handleUploadItem = (newItem) => {
    // In a real app, this would make an API call
    setWardrobeItems((prev) => ({
      ...prev,
      [newItem.category]: [
        ...prev[newItem.category],
        {
          id: Math.random().toString(36).substr(2, 9),
          ...newItem,
        },
      ],
    }));
    setIsUploadModalOpen(false);
  };

  // Mock function to delete an item
  const handleDeleteItem = (itemId) => {
    // In a real app, this would make an API call
    Object.keys(wardrobeItems).forEach((category) => {
      setWardrobeItems((prev) => ({
        ...prev,
        [category]: prev[category].filter((item) => item.id !== itemId),
      }));
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-primary-green'>
          My Wardrobe
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-primary-green text-white px-4 py-2 rounded-lg flex items-center'
          onClick={() => setIsUploadModalOpen(true)}
        >
          <Icon icon='mdi:plus' className='mr-2' />
          Add Clothing
        </motion.button>
      </div>

      {/* Search Bar */}
      <div className='relative mb-6'>
        <input
          type='text'
          placeholder='Search your wardrobe...'
          className='w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Icon
          icon='mdi:magnify'
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
        />
      </div>

      {/* Category Tabs */}
      <div className='flex overflow-x-auto space-x-4 mb-6 pb-2'>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex flex-col items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === category.id
                ? "bg-primary-green text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            <Icon icon={category.icon} className='text-2xl mb-1' />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Wardrobe Items Grid */}
      {filteredItems.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div className='relative h-48 bg-gray-100'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover'
                />
                <button
                  className='absolute top-2 right-2 bg-white p-1 rounded-full shadow-md'
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <Icon icon='mdi:delete' className='text-red-500' />
                </button>
              </div>
              <div className='p-3'>
                <h3 className='font-medium'>{item.name}</h3>
                <div className='flex items-center text-sm text-gray-500 mt-1'>
                  <span className='capitalize'>{item.category}</span>
                  <span className='mx-1'>•</span>
                  <span className='capitalize'>{item.color}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-12 text-center'>
          <Icon
            icon='mdi:hanger-off'
            className='text-6xl text-gray-300 mb-4'
          />
          <h3 className='text-xl font-medium text-gray-500 mb-2'>
            No items found
          </h3>
          <p className='text-gray-400 mb-6'>
            {searchQuery
              ? "Try adjusting your search terms"
              : "Start adding items to your wardrobe"}
          </p>
          <button
            className='bg-primary-green text-white px-4 py-2 rounded-lg flex items-center'
            onClick={() => setIsUploadModalOpen(true)}
          >
            <Icon icon='mdi:plus' className='mr-2' />
            Add Your First Item
          </button>
        </div>
      )}

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <UploadCloth isClosed={() => setIsUploadModalOpen(false)} />
      )}
    </div>
  );
};

export default WardRobe;
