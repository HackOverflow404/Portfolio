import React from 'react';

let cachedBasePath: string | null = null;

export function getBasePath(): string {
  if (cachedBasePath !== null) {
    return cachedBasePath;
  }

  if (typeof window !== 'undefined') {
    const { hostname, pathname } = window.location;
    
    if (hostname.includes('github.io')) {
      const firstPathSegment = pathname.split('/')[1];
      cachedBasePath = firstPathSegment ? `/${firstPathSegment}` : '';
      return cachedBasePath;
    }
    
    cachedBasePath = '';
    return cachedBasePath;
  }
  
  cachedBasePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  return cachedBasePath;
}

export function getAssetUrl(assetPath: string): string {
  const basePath = getBasePath();
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

export function useBasePath(): string {
  const [basePath, setBasePath] = React.useState<string>(() => {
    return typeof window !== 'undefined' ? getBasePath() : '';
  });

  React.useEffect(() => {
    const currentBasePath = getBasePath();
    if (basePath !== currentBasePath) {
      setBasePath(currentBasePath);
    }
  }, []);

  return basePath;
}

export function clearBasePathCache(): void {
  cachedBasePath = null;
}