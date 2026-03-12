/* ── Scripts — connexion.html ── */

function switchTab(tab) {
      document.querySelectorAll('.auth-tab').forEach((t, i) => {
        t.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
      });
      document.getElementById('panel-login').classList.toggle('active', tab === 'login');
      document.getElementById('panel-register').classList.toggle('active', tab === 'register');
    }

    function togglePwd(id, btn) {
      const input = document.getElementById(id);
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.style.color = isText ? '' : 'var(--teal-light)';
    }

    function checkStrength(val) {
      const fill = document.getElementById('strength-fill');
      const text = document.getElementById('strength-text');
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const levels = [
        { w: '0%',   c: 'transparent', t: 'Saisissez un mot de passe' },
        { w: '25%',  c: '#e74c3c',     t: 'Trop faible' },
        { w: '50%',  c: '#e67e22',     t: 'Faible' },
        { w: '75%',  c: '#f1c40f',     t: 'Correct' },
        { w: '100%', c: '#009099',     t: 'Fort ✓' },
      ];
      const l = val.length === 0 ? levels[0] : levels[Math.min(score, 4)];
      fill.style.width = l.w;
      fill.style.background = l.c;
      text.textContent = l.t;
      text.style.color = l.c === 'transparent' ? '' : l.c;
    }

    // Auto-switch si ?tab=register dans l'URL
    if (new URLSearchParams(window.location.search).get('tab') === 'register') {
      switchTab('register');
    }
