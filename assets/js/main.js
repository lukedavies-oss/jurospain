(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', (!expanded).toString());
      navMenu.dataset.open = (!expanded).toString();
    });
  }

  const banner = document.querySelector('.cookie-banner');
  const consentKey = 'jurospain-consent';
  const gaId = 'G-XXXXXXX';

  function loadAnalytics() {
    if (!gaId || gaId === 'G-XXXXXXX') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} // eslint-disable-line
    gtag('js', new Date());
    gtag('config', gaId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  }

  function showBanner() {
    if (banner) {
      banner.hidden = false;
    }
  }

  if (banner) {
    const consent = localStorage.getItem(consentKey);
    if (consent === 'accepted') {
      loadAnalytics();
    } else {
      showBanner();
    }
    banner.addEventListener('click', function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.dataset.cookieAction;
      if (!action) return;
      if (action === 'accept') {
        localStorage.setItem(consentKey, 'accepted');
        banner.hidden = true;
        loadAnalytics();
      }
      if (action === 'manage') {
        alert('Cookie preferences feature coming soon.');
      }
    });
  }
})();
