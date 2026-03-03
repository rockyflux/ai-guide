/* global mediumZoom */
(function () {
  function init() {
    if (typeof window === 'undefined') return;
    if (typeof window.mediumZoom !== 'function') return;

    // Hugo Book content is rendered inside: <article class="markdown book-article">
    // - Only enable zoom for content images
    // - Opt-out: add class="no-zoom" or data-no-zoom
    // - Exclude SVG (often icons/diagrams where zoom feels odd)
    var selector =
      '.book-article img:not(.no-zoom):not([data-no-zoom]):not([src$=".svg"]):not([src$=".SVG"])';

    window.mediumZoom(selector, {
      margin: 24,
      scrollOffset: 80,
      background: 'rgba(0, 0, 0, 0.85)'
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
