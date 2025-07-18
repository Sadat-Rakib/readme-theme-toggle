function setTheme(theme) {
  document.body.classList.remove('light', 'dark', 'technical');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}

// Auto-apply theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});
