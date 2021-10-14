import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded bg-gray-200 h-80 w-1/2" />
        <div className="flex-1 space-y-4 py-1">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>

          <div className="h-4 bg-gray-200 rounded w-28" />
          <div className="h-10 bg-gray-200 rounded w-28" />
          <div className="h-24 bg-gray-200 rounded w-full" />
          <div className="h-14 bg-gray-200 rounded w-36" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
