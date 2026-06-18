// ===== EVIDENCED - Complete JavaScript Rewrite =====
// Modern, clean, fully functional

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const pillboxToggle = document.getElementById('pillboxToggle');
const sidebar = document.getElementById('sidebar');
const pillboxPanel = document.getElementById('pillboxPanel');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');
const closePillbox = document.getElementById('closePillbox');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌓';
themeToggle.className = 'theme-toggle';
themeToggle.title = 'Theme umschalten';
document.querySelector('.navbar-container').appendChild(themeToggle);

// Event Listeners
menuToggle.addEventListener('click', toggleSidebar);
pillboxToggle.addEventListener('click', togglePillbox);
closeSidebar.addEventListener('click', toggleSidebar);
closePillbox.addEventListener('click', togglePillbox);
overlay.addEventListener('click', closeAllPanels);
themeToggle.addEventListener('click', toggleTheme);

// Tab Functionality
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');
    
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    btn.classList.add('active');
    document.getElementById(targetTab + 'Tab').classList.add('active');
  });
});

// Functions
function toggleSidebar() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

function togglePillbox() {
  pillboxPanel.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

function closeAllPanels() {
  sidebar.classList.remove('active');
  pillboxPanel.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  themeToggle.textContent = newTheme === 'dark' ? '🌞' : '🌙';
}

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';

// Close panels on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllPanels();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

console.log('Evidenced JS initialized - Modern & Functional');