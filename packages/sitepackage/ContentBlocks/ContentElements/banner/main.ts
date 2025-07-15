document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('[data-banner]').forEach(banner => {
    const closeButton = banner.querySelector<HTMLButtonElement>('[data-banner-close-button]');
    if (!closeButton) return;

    closeButton.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  });
});
