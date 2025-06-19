import React from 'react';

export function getBasePath() {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    if (hostname.includes('github.io')) {
      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        return `/${pathParts[0]}`;
      }
    }
    
    return '';
  }
  
  return process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
}

export interface GetAssetUrlParams {
  assetPath: string;
}

export function getAssetUrl(assetPath: string): string {
  const basePath: string = getBasePath();
  const cleanAssetPath: string = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return basePath ? `${basePath}/${cleanAssetPath}` : `/${cleanAssetPath}`;
}

export function useBasePath() {
  const [basePath, setBasePath] = React.useState(() => {
    return getBasePath();
  });

  React.useEffect(() => {
    setBasePath(getBasePath());
  }, []);

  return basePath;
}