
(function _() {
  'use strict';

  const Intro = function(config) {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('rmr-intersecting', entry.isIntersecting)
      });
    });

    const faders = document.querySelectorAll('.rmr-intro');
    faders.forEach(f => {
      observer.observe(f);
    });
  }

  module.exports = Intro;
})();
