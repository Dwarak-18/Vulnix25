
'use client';

import React, { useState, useEffect, type ReactNode } from 'react';
import LoadingScreen from './LoadingScreen';

interface LayoutClientWrapperProps {
  children: ReactNode;
}

const LayoutClientWrapper: React.FC<LayoutClientWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the loading screen logic runs only after the component mounts on the client
    setIsClient(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (!isClient) {
    // Render nothing or a minimal server-side placeholder to avoid hydration issues
    // The actual loading screen will be rendered client-side
    return null;
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={handleLoadingComplete} />}
      {!isLoading && children}
    </>
  );
};

export default LayoutClientWrapper;
