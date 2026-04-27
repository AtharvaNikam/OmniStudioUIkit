// Omni Studio — Operator Console prototype
// Sidebar / titlebar renderer + lightweight interactions

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
    <a class="workspace-switch__opt is-active" href="index.html">Studio</a>
    <a class="workspace-switch__opt" href="../operations/index.html">Operations</a>
  </div>
</div>

<a class="sidebar__brand" href="index.html">
  <span class="brand-mark">${BRAND_MARK_SVG}</span>
  <span class="sidebar__wordmark">Omni<span class="studio">.studio</span></span>
</a>

<nav class="nav" aria-label="Main navigation">
  <a class="nav__row nav__row--primary" href="index.html" data-nav="home">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
    New Brief
  </a>

  <div class="nav__section">The Team</div>

  <a class="nav__row" href="agents.html" data-nav="agents">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
    Agents
  </a>
  <a class="nav__row" data-nav="pairings">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 20a5 5 0 0110 0M11 20a5 5 0 0110 0"/></svg>
    Pairings
  </a>

  <div class="nav__section">Capabilities</div>

  <a class="nav__row" href="scheduled-tasks.html" data-nav="tasks">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    Scheduled Tasks
  </a>
  <a class="nav__row" href="connectors.html" data-nav="connectors">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a3 3 0 100-6M15 6a3 3 0 100 6"/><path d="M6 9h3M15 9h3M9 9v6a3 3 0 006 0"/></svg>
    Integrations
  </a>
  <a class="nav__row" href="skills.html" data-nav="skills">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h10M4 18h16"/><circle cx="18" cy="12" r="2"/></svg>
    Playbooks
  </a>
  <a class="nav__row" href="plugins.html" data-nav="plugins">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4H5v4a3 3 0 003 3h3v3h4v-3h3a3 3 0 003-3V7h-4V3h-4v4H9V3z"/></svg>
    Industry Packs
  </a>
  <a class="nav__row" href="channels.html" data-nav="channels">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M4 6l8 7 8-7"/></svg>
    Lines &amp; Channels
  </a>

  <div class="nav__section">Inbox</div>
  <div class="nav__section">Team <span class="badge-chip">Beta</span></div>
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
  <span>Omni<span style="color: var(--slate-400);">.studio</span></span>
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
  const composerInput = document.getElementById('composer-input');
  const sendBtn = document.getElementById('send-btn');
  if (composerInput && sendBtn) {
    composerInput.addEventListener('input', () => {
      if (composerInput.value.trim().length > 0) sendBtn.classList.add('is-ready');
      else sendBtn.classList.remove('is-ready');
      composerInput.style.height = 'auto';
      composerInput.style.height = Math.min(composerInput.scrollHeight, 200) + 'px';
    });
  }

  document.querySelectorAll('.task-suggestions__close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.task-suggestions')?.remove());
  });

  document.querySelectorAll('.segmented').forEach(group => {
    group.querySelectorAll('.segmented__option').forEach(opt => {
      opt.addEventListener('click', () => {
        group.querySelectorAll('.segmented__option').forEach(o => o.classList.remove('is-active'));
        opt.classList.add('is-active');
      });
    });
  });

  document.querySelectorAll('.tasks-nav').forEach(group => {
    group.querySelectorAll('.tasks-nav__item').forEach(item => {
      item.addEventListener('click', () => {
        group.querySelectorAll('.tasks-nav__item').forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');
        const target = item.getAttribute('data-target');
        if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });

  const overlay = document.querySelector('.modal-overlay');
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay?.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });
  const closeModal = () => { overlay?.classList.remove('is-open'); document.body.style.overflow = ''; };
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.modal-tabs').forEach(group => {
    group.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
      });
    });
  });

  document.querySelectorAll('.avatar-chips').forEach(group => {
    group.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        group.querySelectorAll('button').forEach(x => x.classList.remove('is-active'));
        b.classList.add('is-active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderChrome();
  bindInteractions();
});
