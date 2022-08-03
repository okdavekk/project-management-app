// Service Worker registration code

export const registerSW = () => {
  // Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
};

this.addEventListener('fetch', function (event) {
  // This fetch function is required for the SW to be detected and is intentionally empty
  // For a more robust, real-world SW example see: https://developers.google.com/web/fundamentals/primers/service-workers
});