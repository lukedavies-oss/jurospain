(function () {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  const consent = localStorage.getItem('juro-cookie-consent');
  if (!consent) {
    banner.hidden = false;
  } else if (consent === 'accepted') {
    if (typeof loadGA === 'function') loadGA();
  }

  banner.addEventListener('click', function (event) {
    const action = event.target.getAttribute('data-cookie-action');
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
