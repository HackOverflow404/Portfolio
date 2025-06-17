import React from 'react';

export function getBasePath() {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // If we're on GitHub Pages
    if (hostname.includes('github.io')) {
      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        return `/${pathParts[0]}`;
      }
    }
    
    // For local development or other environments
    return '';
  }
  
  // Server-side: determine based on environment
  return process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
}

/**
 * Get the full URL for a public asset
 * @param {string} assetPath - Path to the asset (e.g., '/Resume.pdf')
 */
export interface GetAssetUrlParams {
  assetPath: string;
}

export function getAssetUrl(assetPath: string): string {
  const basePath: string = getBasePath();
  // Remove leading slash from assetPath if it exists to avoid double slashes
  const cleanAssetPath: string = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return basePath ? `${basePath}/${cleanAssetPath}` : `/${cleanAssetPath}`;
}

/**
 * React hook version for components that need reactive updates
 */
export function useBasePath() {
  const [basePath, setBasePath] = React.useState(() => {
    // Initialize with the current base path
    return getBasePath();
  });

  React.useEffect(() => {
    // Update base path when component mounts (client-side only)
    setBasePath(getBasePath());
  }, []);

  return basePath;
}