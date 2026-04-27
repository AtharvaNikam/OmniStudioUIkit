// Omni Studio — Operations workspace (the ServiceTitan-like business app)

const BRAND_MARK_SVG = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="24" cy="24" r="23" stroke="#0A0E12" stroke-width="1.2"/>
  <circle cx="24" cy="24" r="16" stroke="#8B9AAE" stroke-width="0.6" stroke-dasharray="1 3"/>
  <circle cx="24" cy="24" r="10" stroke="#0A0E12" stroke-width="0.8" stroke-dasharray="2 2"/>
  <circle cx="24" cy="24" r="2.5" fill="#D97706"/>
</svg>`;

const SIDEBAR_HTML = `
<div class="workspace-switch">
  <span class="workspace-switch__label">Workspace</span>
  <div class="workspace-switch__track">
    <a class="workspace-switch__opt" href="../prototype/index.html">Studio</a>
    <a class="workspace-switch__opt is-active" href="index.html">Operations</a>
  </div>
</div>

<a class="sidebar__brand" href="index.html">
  <span class="brand-mark">${BRAND_MARK_SVG}</span>
  <span class="sidebar__wordmark">Omni<span class="studio">.studio</span></span>
</a>

<nav class="nav" aria-label="Operations navigation">
  <a class="nav__row nav__row--primary" href="index.html" data-nav="dashboard">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="9" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="14" width="8" height="7" rx="1"/></svg>
    Dashboard
  </a>

  <div class="nav__section">The Shop</div>

  <a class="nav__row" href="dispatch.html" data-nav="dispatch">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M9 5v14"/></svg>
    Dispatch
  </a>
  <a class="nav__row" href="field.html" data-nav="field">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>
    Field App
  </a>
  <a class="nav__row" href="crm.html" data-nav="crm">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>
    Customers
  </a>
  <a class="nav__row" href="leads.html" data-nav="leads">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l6 6L21 6"/><circle cx="12" cy="12" r="9"/></svg>
    Leads
  </a>

  <div class="nav__section">Money</div>

  <a class="nav__row" href="payments.html" data-nav="payments">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 16h3"/></svg>
    Payments
  </a>
  <a class="nav__row" href="accounting.html" data-nav="accounting">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6"/></svg>
    Accounting
  </a>

  <div class="nav__section">Go-to-market</div>

  <a class="nav__row" href="marketing.html" data-nav="marketing">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v5a2 2 0 002 2h2l3-3h7a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v5z"/><path d="M17 14l4 4v-9l-4 4"/></svg>
    Marketing
  </a>
  <a class="nav__row" href="inventory.html" data-nav="inventory">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/></svg>
    Inventory
  </a>

  <div class="nav__section">Company</div>
  <div class="nav__section">Settings</div>
</nav>

<div class="sidebar__spacer"></div>

<div class="user-pill">
  <span class="user-pill__avatar">DC</span>
  <span class="user-pill__name">Dan · Phoenix HVAC</span>
  <a class="upgrade" href="#">Pilot</a>
  <span class="user-pill__caret" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
  </span>
</div>
`;

const TITLEBAR_HTML = `
<div class="titlebar__brand">
  ${BRAND_MARK_SVG}
  <span>Omni<span style="color: var(--slate-400);">.studio</span> · Operations</span>
</div>
<div class="titlebar__spacer"></div>
<div class="titlebar__controls" aria-hidden="true">
  <span>—</span><span>▢</span><span>✕</span>
</div>
`;

function renderChrome() {
  const titlebar = document.querySelector('.titlebar');
  if (titlebar && !titlebar.children.length) titlebar.innerHTML = TITLEBAR_HTML;

  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.children.length) sidebar.innerHTML = SIDEBAR_HTML;

  const page = document.body.getAttribute('data-page');
  if (page) {
    const row = document.querySelector(`.sidebar [data-nav="${page}"]`);
    if (row) row.classList.add('is-active');
  }
}

function bindInteractions() {
  document.querySelectorAll('.segmented').forEach(group => {
    group.querySelectorAll('.segmented__option').forEach(opt => {
      opt.addEventListener('click', () => {
        group.querySelectorAll('.segmented__option').forEach(o => o.classList.remove('is-active'));
        opt.classList.add('is-active');
      });
    });
  });

  document.querySelectorAll('.subnav').forEach(group => {
    group.querySelectorAll('.subnav__item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        group.querySelectorAll('.subnav__item').forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderChrome();
  bindInteractions();
});
