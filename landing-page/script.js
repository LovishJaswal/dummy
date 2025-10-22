const toggleBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

toggleBtn.addEventListener('click', () => {
  if (themeLink.getAttribute('href') === 'styling-light.css') {
    themeLink.href = 'styling-dark.css';
    toggleBtn.textContent = '☀️';
  } else {
    themeLink.href = 'styling-light.css';
    toggleBtn.textContent = '🌙';
  }
});
