/* ============================================================
   WAR ROOM — Shop Renderer
   Builds the shop entirely from SHOP_DATA (see shop-data.js).
   ============================================================ */

(() => {
  const mount = document.getElementById('shopMount');
  const filterBar = document.getElementById('filterBar');
  if (!mount || typeof SHOP_DATA === 'undefined') return;

  /* ----------------------------------------------------------
     Parse a cost/production string like "60💰 • 15🔩 • 10🧵"
     into chip spans. Handles plain strings like
     "3🪵 به ازای هر ۱ متر" gracefully (renders as one chip).
  ---------------------------------------------------------- */
  function renderCostChips(str) {
    if (!str) return '';
    const parts = str.split('•').map(s => s.trim()).filter(Boolean);
    return parts.map(p => `<span class="chip">${escapeHtml(p)}</span>`).join('');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ----------------------------------------------------------
     Build filter chips from categories
  ---------------------------------------------------------- */
  SHOP_DATA.categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip';
    btn.dataset.filter = cat.id;
    btn.innerHTML = `<span>${cat.icon}</span><span>${cat.label}</span>`;
    filterBar.appendChild(btn);
  });

  /* ----------------------------------------------------------
     Build one card's HTML
  ---------------------------------------------------------- */
  function buildCard(item, index) {
    const isSpecial = !!item.special;
    const imgPath = `assets/items/${item.img}.png`;

    let statsHtml = '';

    statsHtml += `
      <div class="stat-row">
        <span class="stat-key">هزینه ساخت</span>
        <span class="stat-val">${renderCostChips(item.cost)}</span>
      </div>`;

    if (item.yield) {
      statsHtml += `
      <div class="stat-row">
        <span class="stat-key">بازدهی</span>
        <span class="stat-val plain">${escapeHtml(item.yield)}</span>
      </div>`;
    }

    if (item.salary) {
      statsHtml += `
      <div class="stat-row">
        <span class="stat-key">حقوق</span>
        <span class="stat-val plain">${escapeHtml(item.salary)}</span>
      </div>`;
    }

    if (item.production) {
      const prodHtml = Object.entries(item.production).map(([fac, val]) =>
        `<span class="prod-chip ${fac}">${escapeHtml(val)}</span>`
      ).join('');
      statsHtml += `
      <div class="stat-row">
        <span class="stat-key">تولید</span>
        <span class="stat-val"><span class="prod-grid">${prodHtml}</span></span>
      </div>`;
    }

    const requirementHtml = item.requirement
      ? `<div class="requirement-note">${escapeHtml(item.requirement)}</div>`
      : '';

    return `
      <article class="item-card ${isSpecial ? 'special' : ''}" data-cat="${item.cat}" data-index="${index}">
        <span class="corner tl"></span><span class="corner tr"></span>
        <span class="corner bl"></span><span class="corner br"></span>

        <div class="card-front">
          <div class="card-media">
            ${isSpecial ? '<div class="card-badges"><span class="badge-special">ویژه</span></div>' : ''}
            <img
              src="${imgPath}"
              alt="${escapeHtml(item.name)}"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              style="display:none;"
            >
            <div class="placeholder-icon" style="display:flex;">${item.icon || '🖼'}</div>
            <span class="placeholder-tag">جای تصویر — ${escapeHtml(item.name)}</span>
          </div>

          <h3 class="card-name"><span class="item-icon">${item.icon || ''}</span>${escapeHtml(item.name)}</h3>
          <p class="card-desc-short">${escapeHtml(item.desc)}</p>

          <div class="card-toggle-row">
            <div class="card-cost-preview">${renderCostChips(item.cost)}</div>
            <span class="card-expand-icon">＋</span>
          </div>
        </div>

        <div class="card-back-wrap">
          <div class="card-back">
            <p class="card-full-desc">${escapeHtml(item.desc)}</p>
            ${statsHtml}
            ${requirementHtml}
          </div>
        </div>
      </article>
    `;
  }

  /* ----------------------------------------------------------
     Render all sections
  ---------------------------------------------------------- */
  function render() {
    mount.innerHTML = '';

    SHOP_DATA.categories.forEach(cat => {
      const itemsInCat = SHOP_DATA.items.filter(i => i.cat === cat.id);
      if (!itemsInCat.length) return;

      const section = document.createElement('section');
      section.className = 'shop-section';
      section.id = `cat-${cat.id}`;
      section.dataset.cat = cat.id;

      section.innerHTML = `
        <div class="shop-section-head">
          <span class="sec-icon">${cat.icon}</span>
          <h2>${cat.label}</h2>
          <span class="sec-line"></span>
          <span class="sec-count">${itemsInCat.length} مورد</span>
        </div>
        <div class="card-grid">
          ${itemsInCat.map((item, idx) => buildCard(item, idx)).join('')}
        </div>
      `;

      mount.appendChild(section);
    });

    attachCardHandlers();
  }

  /* ----------------------------------------------------------
     Card open/close (unroll) behavior
  ---------------------------------------------------------- */
  function attachCardHandlers() {
    mount.querySelectorAll('.item-card').forEach(card => {
      const wrap = card.querySelector('.card-back-wrap');
      const front = card.querySelector('.card-front');

      front.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        if (isOpen) {
          wrap.style.maxHeight = '0px';
          card.classList.remove('open');
        } else {
          card.classList.add('open');
          wrap.style.maxHeight = wrap.scrollHeight + 'px';
        }
      });
    });
  }

  /* recalc open card heights on resize (text reflow) */
  window.addEventListener('resize', () => {
    mount.querySelectorAll('.item-card.open .card-back-wrap').forEach(wrap => {
      wrap.style.maxHeight = wrap.scrollHeight + 'px';
    });
  });

  /* ----------------------------------------------------------
     Filtering
  ---------------------------------------------------------- */
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const sections = mount.querySelectorAll('.shop-section');

    if (filter === 'all') {
      sections.forEach(s => s.style.display = '');
    } else {
      sections.forEach(s => {
        s.style.display = (s.dataset.cat === filter) ? '' : 'none';
      });
      const target = document.getElementById(`cat-${filter}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  render();
})();
