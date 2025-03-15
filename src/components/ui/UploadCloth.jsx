import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const UploadCloth = ({ isClosed, handleUploadItem }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <motion.div
        className='bg-white rounded-lg shadow-xl w-full max-w-md'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold text-primary-green'>
              Add New Item
            </h2>
            <button onClick={() => isClosed(true)}>
              <Icon icon='mdi:close' className='text-2xl' />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newItem = {
                name: formData.get("name"),
                category: formData.get("category"),
                color: formData.get("color"),
                season: formData.get("season"),
                image:
                  "https://via.placeholder.com/150?text=" +
                  formData.get("name").replace(" ", "+"),
              };
              handleUploadItem(newItem);
            }}
          >
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Item Name</label>
              <input
                type='text'
                name='name'
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Category</label>
              <select
                name='category'
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              >
                <option value=''>Select a category</option>
                <option value='tops'>Tops</option>
                <option value='bottoms'>Bottoms</option>
                <option value='shoes'>Shoes</option>
                <option value='accessories'>Accessories</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Color</label>
              <input
                type='text'
                name='color'
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Season</label>
              <select
                name='season'
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              >
                <option value='all'>All Seasons</option>
                <option value='spring'>Spring</option>
                <option value='summer'>Summer</option>
                <option value='fall'>Fall</option>
                <option value='winter'>Winter</option>
              </select>
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 mb-2'>
                Upload Image
              </label>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
                <Icon
                  icon='mdi:cloud-upload'
                  className='text-4xl text-gray-400 mx-auto mb-2'
                />
                <p className='text-sm text-gray-500 mb-2'>
                  Drag and drop an image or click to browse
                </p>
                <input type='file' className='hidden' id='image-upload' />
                <button
                  type='button'
                  onClick={() =>
                    document.getElementById("image-upload").click()
                  }
                  className='text-primary-green text-sm font-medium'
                >
                  Browse Files
                </button>
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                For demo purposes, a placeholder image will be used
              </p>
            </div>

            <div className='flex justify-end space-x-3'>
              <button
                type='button'
                className='px-4 py-2 border border-gray-300 rounded-lg'
                onClick={() => isClosed(true)}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-primary-green text-white rounded-lg'
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UploadCloth;
