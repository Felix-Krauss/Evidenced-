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
const supplementsTab = document.getElementById('supplementsTab');
const stacksTab = document.getElementById('stacksTab');

// ===== State =====
let pillbox = JSON.parse(localStorage.getItem('pillbox')) || [];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSidebar();
  initPillbox();
  initTabs();
  initCardActions();
  updatePillboxUI();
});

function initNavbar() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('shrunk');
    } else {
      navbar.classList.add('shrunk');
    }
    
    lastScroll = currentScroll;
  });
}
=======
// ===== Navbar =====
function initNavbar() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('shrunk');
      return;
    }

    if (currentScroll > 0) {
      // Any scroll position > 0: add blur effect
      navbar.classList.add('shrunk');
    } else {
      // At top: remove blur effect
      navbar.classList.remove('shrunk');
    }
    
    lastScroll = currentScroll;
  });
}=====
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
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebarPanel();
      closePillboxPanel();
    }
  });
}

function closeSidebarPanel() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Tabs =====
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      
      // Update active tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update active tab content
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`${tab}Tab`).classList.add('active');
    });
  });
}

// ===== Card Actions =====
function initCardActions() {
  const cards = document.querySelectorAll('.card[data-tab]');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const tab = card.getAttribute('data-tab');
      const section = card.getAttribute('data-section');
      
      // Open sidebar
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Switch to the appropriate tab
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
          btn.classList.add('active');
        }
      });
      
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`${tab}Tab`).classList.add('active');
      
      // If it's the hype-check card, scroll to the hype-check section in the sidebar
      if (section === 'hype-check') {
        setTimeout(() => {
          const hypeCheckSection = document.querySelector('.nav-section:has(.nav-title)');
          if (hypeCheckSection) {
            hypeCheckSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  });
  
  // Step 2 click opens pillbox
  const step2 = document.querySelector('.step:nth-child(2)');
  if (step2) {
    step2.addEventListener('click', () => {
      pillboxPanel.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
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
}

=======
function closePillboxPanel() {
  pillboxPanel.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Open pillbox from text link in step 2
window.openPillboxFromText = function() {
  pillboxPanel.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// ===== Overlay Click Handler ==========
// Single handler for both sidebar and pillbox
overlay.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    closeSidebarPanel();
  }
  if (pillboxPanel.classList.contains('open')) {
    closePillboxPanel();
  }
});

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
  
  document.body.appendChild(notification);
  
  // Remove after 2 seconds
  setTimeout(() => {
    notification.style.animation = 'fadeOut 300ms ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

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

// ===== CSS for Notification (injected dynamically) =====
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent);
    color: var(--bg-primary);
    padding: 12px 24px;
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    z-index: 1000;
    box-shadow: var(--shadow-lg);
    animation: slideUp 300ms ease;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;
document.head.appendChild(notificationStyles);

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
