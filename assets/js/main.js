(function () {
  var body = document.body;
  var nav = document.querySelector('[data-nav]');
  var navToggle = document.querySelector('.nav-toggle');

  if (nav && navToggle) {
    var toggleNav = function (forceState) {
      var isOpen = body.getAttribute('data-nav-open') === 'true';
      var nextState = typeof forceState === 'boolean' ? forceState : !isOpen;
      body.setAttribute('data-nav-open', nextState ? 'true' : 'false');
      navToggle.setAttribute('aria-expanded', nextState ? 'true' : 'false');
    };

    navToggle.addEventListener('click', function () {
      toggleNav();
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        toggleNav(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        toggleNav(false);
      }
    });

    document.addEventListener('click', function (event) {
      if (body.getAttribute('data-nav-open') !== 'true') return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      toggleNav(false);
    });
  }
})();

(function () {
  var banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  var consent = localStorage.getItem('juro-cookie-consent');
  if (!consent) {
    banner.hidden = false;
  } else if (consent === 'accepted') {
    if (typeof loadGA === 'function') loadGA();
  }

  banner.addEventListener('click', function (event) {
    var action = event.target.getAttribute('data-cookie-action');
    if (!action) return;

    if (action === 'accept') {
      localStorage.setItem('juro-cookie-consent', 'accepted');
      banner.hidden = true;
      if (typeof loadGA === 'function') loadGA();
    }

    if (action === 'manage') {
      alert('Update your preferences by clearing cookies in your browser.');
    }
  });
})();
