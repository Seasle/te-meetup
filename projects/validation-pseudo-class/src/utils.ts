export const isInputElement = (entry: unknown): entry is HTMLInputElement =>
  entry instanceof HTMLInputElement;

export const onReady = (handler: () => void) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    handler();
  } else {
    window.addEventListener('DOMContentLoaded', () => handler(), { once: true });
  }
};
