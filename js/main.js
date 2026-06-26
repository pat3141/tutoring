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
      if (res.ok) {
        status.style.display = 'block';
        e.target.reset();
      } else {
        error.style.display = 'block';
      }
    } catch {
      error.style.display = 'block';
    }
    btn.textContent = 'Send message';
    btn.disabled = false;
  }