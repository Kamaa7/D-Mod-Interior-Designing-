import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'image' | 'project' | 'blog';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'card', 
  count = 1,
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'project':
        return (
          <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
            {/* Image skeleton */}
            <div className="w-full h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            
            {/* Content skeleton */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="flex justify-between">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
            {/* Image skeleton */}
            <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            
            {/* Content skeleton */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex gap-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className={`w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded ${className}`} />
        );

      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
          </div>
        );

      case 'card':
      default:
        return (
          <div className={`bg-white rounded-lg p-6 shadow-lg ${className}`}>
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;

