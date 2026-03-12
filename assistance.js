/* ── Scripts — assistance.html ── */

function toggleFaq(btn) {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }
    function filterFaq(cat, btn) {
      document.querySelectorAll('.faq-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.faq-item').forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
