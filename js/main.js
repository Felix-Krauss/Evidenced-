// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const pillboxToggle = document.getElementById('pillboxToggle');
const pillboxCount = document.getElementById('pillboxCount');
const sidebar = document.getElementById('sidebar');
const pillboxPanel = document.getElementById('pillboxPanel');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');
const closePillbox = document.getElementById('closePillbox');
const pillboxContent = document.getElementById('pillboxContent');
const pillboxTotal = document.getElementById('pillboxTotal');
const basicsGrid = document.getElementById('basicsGrid');
const stacksGrid = document.getElementById('stacksGrid');
const hypeCheckGrid = document.getElementById('hypeCheckGrid');
const newsGrid = document.getElementById('newsGrid');

// ===== State =====
let pillbox = JSON.parse(localStorage.getItem('pillbox')) || [];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSidebar();
  initPillbox();
  renderContent();
  updatePillboxUI();
});

// ===== Navbar =====
function initNavbar() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('shrunk');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.classList.add('shrunk');
    } else {
      // Scrolling up
      navbar.classList.remove('shrunk');
    }
    
    lastScroll = currentScroll;
  });
}

// ===== Sidebar =====
function initSidebar() {
  // Open sidebar
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close sidebar
  closeSidebar.addEventListener('click', closeSidebarPanel);
  
  // Close on overlay click
  overlay.addEventListener('click', closeSidebarPanel);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebarPanel();
      closePillboxPanel();
    }
  });

  // Nav link clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
      closeSidebarPanel();
      
      // Scroll to section after sidebar closes
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 300);
    });
  });
}

function closeSidebarPanel() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Pillbox =====
function initPillbox() {
  // Open pillbox
  pillboxToggle.addEventListener('click', () => {
    pillboxPanel.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close pillbox
  closePillbox.addEventListener('click', closePillboxPanel);
  
  // Close on overlay click
  overlay.addEventListener('click', () => {
    if (pillboxPanel.classList.contains('open')) {
      closePillboxPanel();
    }
  });
}

function closePillboxPanel() {
  pillboxPanel.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Pillbox Management =====
function addToPillbox(supplement) {
  // Check if already in pillbox
  const existingIndex = pillbox.findIndex(item => item.id === supplement.id);
  
  if (existingIndex >= 0) {
    // Already in pillbox, just update quantity
    pillbox[existingIndex].quantity = (pillbox[existingIndex].quantity || 1) + 1;
  } else {
    // Add new item
    pillbox.push({
      id: supplement.id,
      name: supplement.name,
      price: supplement.price,
      dailyPrice: supplement.dailyPrice,
      icon: supplement.icon,
      quantity: 1
    });
  }

  savePillbox();
  updatePillboxUI();
  
  // Show feedback
  showNotification(`${supplement.name} zur Pillenbox hinzugefügt`);
}

function removeFromPillbox(id) {
  pillbox = pillbox.filter(item => item.id !== id);
  savePillbox();
  updatePillboxUI();
}

function updateQuantity(id, change) {
  const item = pillbox.find(item => item.id === id);
  if (item) {
    item.quantity = Math.max(1, (item.quantity || 1) + change);
    savePillbox();
    updatePillboxUI();
  }
}

function savePillbox() {
  localStorage.setItem('pillbox', JSON.stringify(pillbox));
}

function updatePillboxUI() {
  // Update count
  const totalCount = pillbox.reduce((sum, item) => sum + (item.quantity || 1), 0);
  pillboxCount.textContent = totalCount;
  
  // Update panel content
  if (pillbox.length === 0) {
    pillboxContent.innerHTML = '<p class="empty-message">Deine Pillenbox ist leer.</p>';
  } else {
    pillboxContent.innerHTML = pillbox.map(item => `
      <div class="pillbox-item" data-id="${item.id}">
        <div class="pillbox-item-info">
          <h4>${item.name}</h4>
          <div class="pillbox-item-meta">
            <span class="pillbox-item-price">${item.price} × ${item.quantity || 1}</span>
          </div>
        </div>
        <div class="pillbox-item-actions">
          <button class="pillbox-item-remove" aria-label="${item.name} entfernen" data-id="${item.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    `).join('');
  }
  
  // Update total
  const totalPrice = pillbox.reduce((sum, item) => sum + ((item.dailyPrice || 0) * (item.quantity || 1)), 0);
  pillboxTotal.textContent = `${totalPrice.toFixed(2).replace('.', ',')} €`;
  
  // Add event listeners to remove buttons
  document.querySelectorAll('.pillbox-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      removeFromPillbox(id);
    });
  });
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #2D6A4F;
    color: white;
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    z-index: 1000;
    animation: slideUp 300ms ease;
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 2 seconds
  setTimeout(() => {
    notification.style.animation = 'fadeOut 300ms ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ===== Content Rendering =====
function renderContent() {
  renderSupplementGrid(basicsGrid, supplements.basics, 'basics');
  renderStackGrid();
  renderSupplementGrid(hypeCheckGrid, supplements.hypeCheck, 'hype-check');
  renderNewsGrid();
}

function renderSupplementGrid(container, items, section) {
  container.innerHTML = items.map(item => `
    <article class="supplement-card" data-id="${item.id}" data-section="${section}">
      <div class="supplement-header">
        <div class="supplement-icon">
          <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none'">
        </div>
        <span class="supplement-badge ${item.evidence === 'schwach' ? 'weak' : ''}">
          ${item.evidence === 'stark' ? '✓ Stark' : item.evidence === 'mittel' ? '○ Mittel' : '✗ Schwach'}
        </span>
      </div>
      <h3 class="supplement-name">${item.name}</h3>
      <p class="supplement-description">${item.description}</p>
      <div class="supplement-meta">
        <span class="supplement-price">${item.price}/Tag</span>
        <span class="supplement-category">${item.category}</span>
      </div>
      <div class="supplement-actions">
        <button class="btn btn-primary btn-add" data-id="${item.id}" data-section="${section}">
          Zur Pillenbox
        </button>
        <button class="btn btn-secondary btn-details" data-id="${item.id}" data-section="${section}">
          Details
        </button>
      </div>
    </article>
  `).join('');

  // Add event listeners
  container.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const section = btn.getAttribute('data-section');
      const supplement = section === 'basics' 
        ? supplements.basics.find(s => s.id === id)
        : supplements.hypeCheck.find(s => s.id === id);
      if (supplement) {
        addToPillbox(supplement);
      }
    });
  });

  container.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const section = btn.getAttribute('data-section');
      const supplement = section === 'basics' 
        ? supplements.basics.find(s => s.id === id)
        : supplements.hypeCheck.find(s => s.id === id);
      if (supplement) {
        showDetails(supplement, section);
      }
    });
  });
}

function renderStackGrid() {
  stacksGrid.innerHTML = stacks.map(stack => `
    <article class="stack-card" data-id="${stack.id}">
      <div class="stack-header">
        <div class="stack-icon">
          <img src="${stack.icon}" alt="${stack.name}" onerror="this.style.display='none'">
        </div>
      </div>
      <h3 class="stack-name">${stack.name}</h3>
      <p class="stack-description">${stack.description}</p>
      <div class="stack-meta">
        <span class="stack-price">${stack.price}/Tag</span>
        <span class="stack-category">${stack.category}</span>
      </div>
      <div class="stack-actions">
        <button class="btn btn-primary btn-add-stack" data-id="${stack.id}">
          Alle zur Pillenbox
        </button>
        <button class="btn btn-secondary btn-details-stack" data-id="${stack.id}">
          Details
        </button>
      </div>
    </article>
  `).join('');

  // Add event listeners
  stacksGrid.querySelectorAll('.btn-add-stack').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const stack = stacks.find(s => s.id === id);
      if (stack) {
        // Add all supplements in the stack
        stack.supplements.forEach(suppId => {
          const supplement = supplements.basics.find(s => s.id === suppId);
          if (supplement) {
            addToPillbox(supplement);
          }
        });
        showNotification(`Stack "${stack.name}" zur Pillenbox hinzugefügt`);
      }
    });
  });

  stacksGrid.querySelectorAll('.btn-details-stack').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const stack = stacks.find(s => s.id === id);
      if (stack) {
        showStackDetails(stack);
      }
    });
  });
}

function renderNewsGrid() {
  newsGrid.innerHTML = news.map(item => `
    <article class="news-card">
      <div class="news-date">${item.date}</div>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-summary">${item.summary}</p>
      <a href="${item.link}" class="news-link">
        Weiterlesen
        <svg class="news-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </article>
  `).join('');
}

// ===== Details Modal =====
function showDetails(supplement, section) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-header">
        <div class="modal-icon">
          <img src="${supplement.icon}" alt="${supplement.name}" onerror="this.style.display='none'">
        </div>
        <div class="modal-title-group">
          <h2 class="modal-title">${supplement.name}</h2>
          <span class="modal-badge ${supplement.evidence === 'schwach' ? 'weak' : ''}">
            ${supplement.evidence === 'stark' ? '✓ Starke Evidenz' : supplement.evidence === 'mittel' ? '○ Mittlere Evidenz' : '✗ Schwache Evidenz'}
          </span>
        </div>
      </div>
      <div class="modal-body">
        <p class="modal-summary">${supplement.details.summary}</p>
        
        <div class="details-section">
          <h3>Vorteile</h3>
          <ul class="details-list">
            ${supplement.details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
          </ul>
        </div>
        
        ${supplement.evidence === 'schwach' ? `
        <div class="details-section">
          <h3>Behauptete Vorteile vs. Aktuelle Evidenz</h3>
          <div class="evidence-comparison">
            <div class="claimed">
              <h4>Behauptet:</h4>
              <ul>${supplement.details.claimedBenefits.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>
            <div class="actual">
              <h4>Aktuelle Evidenz:</h4>
              <ul>${supplement.details.actualEvidence.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
        ` : ''}
        
        <div class="details-section">
          <h3>Dosierung</h3>
          <p>${supplement.details.dosage}</p>
        </div>
        
        <div class="details-section">
          <h3>Empfehlung</h3>
          <p>${supplement.details.recommendation}</p>
        </div>
        
        <div class="details-section">
          <h3>Wissenschaftliche Quellen</h3>
          <ul class="details-list">
            ${supplement.details.sources.map(source => `
              <li class="details-link">
                <a href="${source.link}" target="_blank">
                  ${source.name} (${source.year})
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-add-modal" data-id="${supplement.id}" data-section="${section}">
          Zur Pillenbox hinzufügen (${supplement.price}/Tag)
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Add event listeners
  modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
  modal.querySelector('.modal-overlay').addEventListener('click', () => closeModal(modal));
  modal.querySelector('.btn-add-modal').addEventListener('click', () => {
    addToPillbox(supplement);
    closeModal(modal);
  });
}

function showStackDetails(stack) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-header">
        <div class="modal-icon">
          <img src="${stack.icon}" alt="${stack.name}" onerror="this.style.display='none'">
        </div>
        <div class="modal-title-group">
          <h2 class="modal-title">${stack.name}</h2>
          <span class="modal-badge">${stack.category}</span>
        </div>
      </div>
      <div class="modal-body">
        <p class="modal-summary">${stack.details.summary}</p>
        
        <div class="details-section">
          <h3>Enthaltene Supplements</h3>
          <div class="stack-supplements">
            ${stack.supplements.map(suppId => {
              const supp = supplements.basics.find(s => s.id === suppId);
              return supp ? `
                <div class="stack-supplement">
                  <img src="${supp.icon}" alt="${supp.name}" onerror="this.style.display='none'">
                  <span>${supp.name}</span>
                </div>
              ` : '';
            }).join('')}
          </div>
        </div>
        
        <div class="details-section">
          <h3>Vorteile</h3>
          <ul class="details-list">
            ${stack.details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
          </ul>
        </div>
        
        <div class="details-section">
          <h3>Empfehlung</h3>
          <p>${stack.details.recommendation}</p>
        </div>
        
        <div class="details-section">
          <h3>Gesamtkosten</h3>
          <p><strong>${stack.price}/Tag</strong></p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-add-modal" data-id="${stack.id}">
          Alle zur Pillenbox hinzufügen
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Add event listeners
  modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
  modal.querySelector('.modal-overlay').addEventListener('click', () => closeModal(modal));
  modal.querySelector('.btn-add-modal').addEventListener('click', () => {
    const stack = stacks.find(s => s.id === stack.id);
    if (stack) {
      stack.supplements.forEach(suppId => {
        const supplement = supplements.basics.find(s => s.id === suppId);
        if (supplement) {
          addToPillbox(supplement);
        }
      });
      showNotification(`Stack "${stack.name}" zur Pillenbox hinzugefügt`);
    }
    closeModal(modal);
  });
}

function closeModal(modal) {
  modal.remove();
  document.body.style.overflow = '';
}

// ===== Card Click Handlers =====
// Add click handlers for cards that open sidebar
const cardElements = document.querySelectorAll('.card[data-section]');
cardElements.forEach(card => {
  card.addEventListener('click', () => {
    const section = card.getAttribute('data-section');
    
    // Open sidebar and scroll to section
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Highlight the corresponding nav section
    const navTitle = sidebar.querySelector(`.nav-title`);
    
    setTimeout(() => {
      closeSidebarPanel();
      const target = document.getElementById(section);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 300);
  });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== CSS for Modal (injected dynamically) =====
const modalStyles = document.createElement('style');
modalStyles.textContent = `
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
  
  .modal-content {
    position: relative;
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: var(--shadow-xl);
    animation: modalSlideIn 300ms ease;
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--text-secondary);
    z-index: 10;
    transition: color var(--transition-fast);
  }
  
  .modal-close:hover {
    color: var(--text-primary);
  }
  
  .modal-close svg {
    width: 24px;
    height: 24px;
  }
  
  .modal-header {
    padding: var(--space-xl);
    display: flex;
    align-items: flex-start;
    gap: var(--space-lg);
    border-bottom: 1px solid var(--border);
  }
  
  .modal-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
  
  .modal-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .modal-title-group {
    flex: 1;
  }
  
  .modal-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--space-xs);
  }
  
  .modal-badge {
    display: inline-block;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    background-color: rgba(45, 106, 79, 0.1);
    color: var(--accent);
  }
  
  .modal-badge.weak {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
  
  .modal-body {
    padding: var(--space-xl);
  }
  
  .modal-summary {
    color: var(--text-secondary);
    margin-bottom: var(--space-xl);
    font-size: var(--font-size-lg);
    line-height: 1.7;
  }
  
  .modal-footer {
    padding: var(--space-xl);
    border-top: 1px solid var(--border);
    text-align: center;
  }
  
  .details-section {
    margin-bottom: var(--space-xl);
  }
  
  .details-section:last-child {
    margin-bottom: 0;
  }
  
  .details-section h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-md);
    color: var(--text-primary);
  }
  
  .details-list {
    list-style: none;
    padding-left: 0;
  }
  
  .details-list li {
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
  }
  
  .details-list li:last-child {
    border-bottom: none;
  }
  
  .details-link {
    display: block;
    padding: var(--space-sm) 0;
  }
  
  .details-link a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--accent);
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
  }
  
  .details-link a:hover {
    color: var(--accent-dark);
  }
  
  .details-link svg {
    width: 18px;
    height: 18px;
  }
  
  .evidence-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin-top: var(--space-md);
  }
  
  .claimed, .actual {
    background: rgba(0, 0, 0, 0.02);
    padding: var(--space-md);
    border-radius: var(--radius-md);
  }
  
  .claimed h4, .actual h4 {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-sm);
  }
  
  .claimed ul, .actual ul {
    list-style: none;
    padding-left: 0;
  }
  
  .claimed li, .actual li {
    padding: var(--space-xs) 0;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }
  
  .stack-supplements {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-top: var(--space-md);
  }
  
  .stack-supplement {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: rgba(0, 0, 0, 0.02);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }
  
  .stack-supplement img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent);
    color: var(--bg-secondary);
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  }
`;
document.head.appendChild(modalStyles);

// ===== Responsive Adjustments =====
function handleResize() {
  // Close panels on small screens when orientation changes
  if (window.innerWidth <= 768) {
    if (sidebar.classList.contains('open') || pillboxPanel.classList.contains('open')) {
      closeSidebarPanel();
      closePillboxPanel();
    }
  }
}

window.addEventListener('resize', handleResize);
