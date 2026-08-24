// Utility function for clean SPA navigation without '#' in the URL
export const navigate = (path) => {
  if (typeof window === 'undefined') return;

  // Clean path format (ensure leading slash, no leading hash)
  let cleanPath = path.startsWith('#') ? path.replace(/^#\/?/, '/') : path;
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Update browser history
  window.history.pushState({}, '', cleanPath);
  
  // Trigger popstate event so App router listener updates the view
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
