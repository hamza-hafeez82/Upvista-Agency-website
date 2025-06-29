"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: React.ComponentType<any> | LucideIcon;
  className?: string;
  size?: number;
  fallback?: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ 
  icon: Icon, 
  className = "w-5 h-5", 
  size,
  fallback 
}) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  try {
    return (
      <Icon 
        className={className} 
        size={size}
        onError={() => setHasError(true)}
      />
    );
  } catch (error) {
    console.warn('Icon failed to load:', error);
    setHasError(true);
    return fallback ? <>{fallback}</> : <div className={className} />;
  }
};

// Safe import wrapper for react-icons
export const safeImportIcon = (importFn: () => Promise<any>) => {
  return React.lazy(() => 
    importFn().catch(() => ({
      default: () => <div className="w-5 h-5" />
    }))
  );
}; 