import React from "react";

const LazyDash = () => {
  return (
    <div className="space-y-4 p-4">
      {/* User greeting skeleton */}
      <div className="animate-pulse">
        <div className="h-8 w-64 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
      </div>

      {/* Main content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="animate-pulse space-y-4">
          <div className="h-[300px] bg-gray-200 rounded-lg shadow-sm"></div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
        
        <div className="animate-pulse space-y-4">
          <div className="h-[300px] bg-gray-200 rounded-lg shadow-sm"></div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyDash;
