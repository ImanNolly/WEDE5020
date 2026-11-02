// PHAR website: extra behaviour without changing the original homepage layout.
document.addEventListener('DOMContentLoaded', function () {
  const search = document.querySelector('.srch');
  const searchButton = document.getElementById('searchBtn');
  function runSearch() {
    if (!search) return;
    const query = search.value.trim().toLowerCase();
    if (!query) { alert('Please enter something to search for.'); return; }
    const pages = {home:'index.html', about:'about.html', service:'services.html', services:'services.html', adoption:'services.html', stories:'stories.html', story:'stories.html', contact:'contact.html', volunteer:'contact.html'};
    const match = Object.keys(pages).find(word => query.includes(word));
    if (match) window.location.href = pages[match];
    else alert('No matching page found. Try About, Services, Stories or Contact.');
  }
  if (searchButton) searchButton.addEventListener('click', runSearch);
  if (search) search.addEventListener('keydown', event => { if (event.key === 'Enter') runSearch(); });
  const loginButton = document.getElementById('loginBtn');
  if (loginButton) loginButton.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');
    if (!email || !password) message.textContent = 'Please enter your email and password.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) message.textContent = 'Please enter a valid email address.';
    else message.textContent = 'Demo only: account login is not connected yet.';
  });
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('contactStatus').textContent = 'Your details are valid. This demo form does not send messages yet.';
  });
});
