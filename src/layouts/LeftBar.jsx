import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../utils/data";
import { Icon } from "@iconify/react";
import useUser from "../hooks/useUser";

const LeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, loading } = useUser();

  return (
    <div className="relative">
      {/* Mobile menu button - visible only on small screens */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-primary-green text-white"
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-40 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        {/* Logo and toggle button */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className={`flex items-center ${!isOpen && "lg:hidden"}`}>
            <Icon icon="mdi:hanger" className="text-3xl text-primary-green" />
            <span className="ml-2 font-bold text-primary-green">AI Stylist</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:block text-gray-500 hover:text-primary-green"
          >
            <Icon icon={isOpen ? "mdi:chevron-left" : "mdi:chevron-right"} className="text-xl" />
          </button>
        </div>

        {/* User profile */}
        <div className={`p-4 border-b ${!isOpen && "lg:justify-center"} flex items-center`}>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {user.profilePicture ? (
              <img 
                src={user.profilePicture} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Icon icon="mdi:account" className="text-2xl text-gray-500" />
            )}
          </div>
          {isOpen && !loading && (
            <div className="ml-3">
              <p className="font-medium">{user.nickname || user.name || "User"}</p>
              <p className="text-xs text-gray-500">
                {user.state && user.country ? `${user.state}, ${user.country}` : "View Profile"}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 ${
                    !isOpen && "lg:justify-center"
                  } hover:bg-gray-100 ${
                    location.pathname === item.path
                      ? "text-primary-green border-r-4 border-primary-green bg-gray-50"
                      : "text-gray-600"
                  }`}
                >
                  <Icon icon={item.icon} className="text-2xl" />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout at bottom */}
        <div className="absolute bottom-0 w-full border-t p-4">
          <button
            className={`flex items-center text-gray-600 hover:text-primary-green ${!isOpen && "lg:justify-center"}`}
          >
            <Icon icon="mdi:logout" className="text-2xl" />
            {isOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Overlay for mobile - closes sidebar when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LeftBar;
