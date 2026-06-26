// Contact form
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const status = document.getElementById('form-status');
  const error = document.getElementById('form-error');
  status.style.display = 'none';
  error.style.display = 'none';
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/mojoeoww', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) { status.style.display = 'block'; e.target.reset(); }
    else { error.style.display = 'block'; }
  } catch { error.style.display = 'block'; }
  btn.textContent = 'Send message';
  btn.disabled = false;
}

// Pricing tabs
function showPricing(type) {
  document.getElementById('pricing-online').style.display = type === 'online' ? 'block' : 'none';
  document.getElementById('pricing-inperson').style.display = type === 'inperson' ? 'block' : 'none';
  document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.07) + 's';
    observer.observe(el);
  });

  // Animate stat numbers
  document.querySelectorAll('.stat-num').forEach(el => {
    const text = el.textContent;
    const num = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return;
    const prefix = text.match(/^[^0-9]*/)[0];
    const suffix = text.match(/[^0-9.]*$/)[0];
    let start = null;
    const duration = 1400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(eased * num) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    const statObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(step);
        statObserver.disconnect();
      }
    });
    statObserver.observe(el);
  });
});
