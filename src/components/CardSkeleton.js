import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-200 rounded h-64 w-full" />
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-200 h-64 w-full" />
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-200 h-64 w-full" />
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-200 h-64 w-full" />
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-200 h-64 w-full" />
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
