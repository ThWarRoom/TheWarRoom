/* ============================================================
   WAR ROOM — Rules Renderer
   Builds the rules page entirely from RULES_DATA (rules-data.js).
   ============================================================ */

(() => {
  const mount = document.getElementById('rulesMount');
  const toc = document.getElementById('rulesToc');
  const ledeEl = document.getElementById('rulesLede');
  if (!mount || typeof RULES_DATA === 'undefined') return;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---- intro text ---- */
  if (ledeEl && RULES_DATA.intro && RULES_DATA.intro.lede) {
    ledeEl.textContent = RULES_DATA.intro.lede;
  }

  /* ---- block renderers ---- */
  const blockRenderers = {

    text(b) {
      return `<p class="r-text">${escapeHtml(b.text)}</p>`;
    },

    subhead(b) {
      return `<h3 class="r-subhead">${escapeHtml(b.text)}</h3>`;
    },

    note(b) {
      return `<div class="r-note">${escapeHtml(b.text)}</div>`;
    },

    numbered(b) {
      const items = b.items.map((item, i) => `
        <div class="r-num-item">
          <span class="r-num-badge">${toPersianDigits(i + 1)}</span>
          <div class="r-num-body">
            ${item.title ? `<p class="r-num-title">${escapeHtml(item.title)}</p>` : ''}
            <p class="r-num-text">${escapeHtml(item.text)}</p>
          </div>
        </div>
      `).join('');
      return `<div class="r-numbered">${items}</div>`;
    },

    list(b) {
      const items = b.items.map(t => `<li>${escapeHtml(t)}</li>`).join('');
      return `<ul class="r-list">${items}</ul>`;
    },

    kv(b) {
      const rows = b.rows.map(r => `
        <div class="r-kv-row">
          <span class="r-kv-key">${escapeHtml(r.k)}</span>
          <span class="r-kv-val">${escapeHtml(r.v)}</span>
        </div>
      `).join('');
      return `<div class="r-kv">${rows}</div>`;
    },

    scale(b) {
      const rows = b.rows.map(r => `
        <div class="r-scale-row ${r.tone || 'ok'}">
          <span class="r-scale-range">${escapeHtml(r.range)}</span>
          <span class="r-scale-label">${escapeHtml(r.label)}</span>
        </div>
      `).join('');
      return `<div class="r-scale">${rows}</div>`;
    },

  };

  function toPersianDigits(n) {
    const map = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return String(n).split('').map(d => map[+d] ?? d).join('');
  }

  /* ---- build TOC ---- */
  RULES_DATA.sections.forEach(sec => {
    const a = document.createElement('a');
    a.href = `#sec-${sec.id}`;
    a.className = 'toc-link';
    a.dataset.target = `sec-${sec.id}`;
    a.innerHTML = `<span>${sec.icon}</span><span>${escapeHtml(sec.title)}</span>`;
    toc.appendChild(a);
  });

  /* ---- build sections ---- */
  function render() {
    mount.innerHTML = RULES_DATA.sections.map(sec => {
      const blocksHtml = sec.blocks.map(b => {
        const renderer = blockRenderers[b.type];
        return renderer ? renderer(b) : '';
      }).join('');

      return `
        <section class="rule-section" id="sec-${sec.id}">
          <div class="rule-panel">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
            <div class="rule-panel-head">
              <span class="ph-icon">${sec.icon}</span>
              <h2>${escapeHtml(sec.title)}</h2>
              <span class="ph-line"></span>
            </div>
            ${blocksHtml}
          </div>
        </section>
      `;
    }).join('');
  }

  /* ---- scroll-spy: highlight active TOC link ---- */
  function setupScrollSpy() {
    const sections = mount.querySelectorAll('.rule-section');
    const links = toc.querySelectorAll('.toc-link');

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => l.classList.toggle('active', l.dataset.target === id));
        }
      });
    }, { rootMargin: '-140px 0px -70% 0px', threshold: 0 });

    sections.forEach(s => io.observe(s));
  }

  /* ---- smooth scroll on TOC click (with sticky-header offset handled by CSS scroll-margin-top) ---- */
  toc.addEventListener('click', (e) => {
    const link = e.target.closest('.toc-link');
    if (!link) return;
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  render();
  setupScrollSpy();
})();
