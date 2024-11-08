export const onReady = (handler: () => void) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    handler();
  } else {
    window.addEventListener('DOMContentLoaded', () => handler(), { once: true });
  }
};
