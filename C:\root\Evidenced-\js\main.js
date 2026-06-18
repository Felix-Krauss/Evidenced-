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
  const feedback = document.createElement('div');
  feedback.className = 'pillbox-feedback';
  feedback.textContent = `${supplement.name} hinzugefügt`;
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.remove();
  }, 2000);
}

function removeFromPillbox(supplementId) {
  pillbox = pillbox.filter(item => item.id !== supplementId);
  savePillbox();
  updatePillboxUI();
}

function savePillbox() {
  localStorage.setItem('pillbox', JSON.stringify(pillbox));
}

function updatePillboxUI() {
  if (!pillboxContent || !pillboxCount || !pillboxTotal) return;

  // Update pillbox count
  const totalItems = pillbox.reduce((sum, item) => sum + (item.quantity || 1), 0);
  pillboxCount.textContent = totalItems;

  // Update pillbox content
  if (pillbox.length === 0) {
    pillboxContent.innerHTML = '<p class="empty-message">Deine Pillenbox ist leer.</p>';
  } else {
    let html = '';
    pillbox.forEach(item => {
      html += `
        <div class="pillbox-item">
          <div class="pillbox-item-icon">${item.icon}</div>
          <div class="pillbox-item-info">
            <h4>${item.name}</h4>
            <p>${item.quantity || 1} x ${item.dailyPrice.toFixed(2)} €/Tag</p>
          </div>
          <button class="pillbox-item-remove" onclick="removeFromPillbox('${item.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      `;
    });
    pillboxContent.innerHTML = html;
  }

  // Update total price
  const totalPrice = pillbox.reduce((sum, item) => sum + ((item.quantity || 1) * item.dailyPrice), 0);
  pillboxTotal.textContent = totalPrice.toFixed(2) + ' €';
}