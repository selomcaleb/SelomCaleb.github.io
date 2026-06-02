function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-btn');
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    btn.textContent = 'Dark';
  } else {
    body.setAttribute('data-theme', 'dark');
    btn.textContent = 'Light';
  }
}

const navAs = document.querySelectorAll('.nav-links a');
const secs = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  navAs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});
