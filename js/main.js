let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== DOM Elements =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const navbar = document.getElementById('navbar');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const menuToggle = document.getElementById('menuToggle');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const pillboxToggle = document.getElementById('pillboxToggle');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const pillboxCount = document.getElementById('pillboxCount');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const sidebar = document.getElementById('sidebar');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const pillboxPanel = document.getElementById('pillboxPanel');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const overlay = document.getElementById('overlay');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const closeSidebar = document.getElementById('closeSidebar');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const closePillbox = document.getElementById('closePillbox');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const pillboxContent = document.getElementById('pillboxContent');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const pillboxTotal = document.getElementById('pillboxTotal');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const supplementsTab = document.getElementById('supplementsTab');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const stacksTab = document.getElementById('stacksTab');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== State =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];let pillbox = JSON.parse(localStorage.getItem('pillbox')) || [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Initialize =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];document.addEventListener('DOMContentLoaded', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  initNavbar();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  initSidebar();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  initPillbox();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  initTabs();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  initCardActions();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  updatePillboxUI();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initNavbar() {
  if (!navbar) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  let lastScroll = 0;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  window.addEventListener('scroll', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    const currentScroll = window.pageYOffset;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (currentScroll <= 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.remove('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } else {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.add('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    lastScroll = currentScroll;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];=======
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Navbar =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initNavbar() {
  if (!navbar) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  let lastScroll = 0;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  window.addEventListener('scroll', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    const currentScroll = window.pageYOffset;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (currentScroll <= 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.remove('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (currentScroll > 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Any scroll position > 0: add blur effect
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.add('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } else {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // At top: remove blur effect
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.remove('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    lastScroll = currentScroll;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}=====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initNavbar() {
  if (!navbar) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  let lastScroll = 0;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  window.addEventListener('scroll', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    const currentScroll = window.pageYOffset;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (currentScroll <= 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.remove('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (currentScroll > lastScroll && currentScroll > 100) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Scrolling down
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.add('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } else {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Scrolling up
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      navbar.classList.remove('shrunk');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    lastScroll = currentScroll;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Sidebar =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initSidebar() {
  if (!menuToggle || !closeSidebar) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Open sidebar
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  menuToggle.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    sidebar.classList.add('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    overlay.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    document.body.style.overflow = 'hidden';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Close sidebar
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  closeSidebar.addEventListener('click', closeSidebarPanel);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Close on escape key
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.addEventListener('keydown', (e) => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (e.key === 'Escape') {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      closeSidebarPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      closePillboxPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function closeSidebarPanel() {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  sidebar.classList.remove('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  overlay.classList.remove('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.body.style.overflow = '';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Tabs =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  if (tabBtns.length === 0 || tabContents.length === 0) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const tabBtns = document.querySelectorAll('.tab-btn');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const tabContents = document.querySelectorAll('.tab-content');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  tabBtns.forEach(btn => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    btn.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const tab = btn.getAttribute('data-tab');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Update active tab button
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      tabBtns.forEach(b => b.classList.remove('active'));
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      btn.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Update active tab content
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      tabContents.forEach(content => content.classList.remove('active'));
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      document.getElementById(`${tab}Tab`).classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Card Actions =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initCardActions() {
  const cards = document.querySelectorAll(".card[data-tab]");
  if (cards.length === 0) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const cards = document.querySelectorAll('.card[data-tab]');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  cards.forEach(card => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    card.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const tab = card.getAttribute('data-tab');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const section = card.getAttribute('data-section');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Open sidebar
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      sidebar.classList.add('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      overlay.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      document.body.style.overflow = 'hidden';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // Switch to the appropriate tab
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const tabBtns = document.querySelectorAll('.tab-btn');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const tabContents = document.querySelectorAll('.tab-content');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      tabBtns.forEach(btn => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        btn.classList.remove('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        if (btn.getAttribute('data-tab') === tab) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          btn.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      tabContents.forEach(content => content.classList.remove('active'));
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      document.getElementById(`${tab}Tab`).classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      // If it's the hype-check card, scroll to the hype-check section in the sidebar
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      if (section === 'hype-check') {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        setTimeout(() => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          const hypeCheckSection = document.querySelector('.nav-section:has(.nav-title)');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          if (hypeCheckSection) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];            hypeCheckSection.scrollIntoView({ behavior: 'smooth', block: 'start'   } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        }, 100);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Step 2 click opens pillbox
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const step2 = document.querySelector('.step:nth-child(2)');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (step2) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    step2.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      pillboxPanel.classList.add('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      overlay.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      document.body.style.overflow = 'hidden';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Pillbox =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function initPillbox() {
  if (!pillboxToggle || !closePillbox) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Open pillbox
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillboxToggle.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    pillboxPanel.classList.add('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    overlay.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    document.body.style.overflow = 'hidden';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Close pillbox
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  closePillbox.addEventListener('click', closePillboxPanel);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];=======
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function closePillboxPanel() {
  if (!pillboxPanel || !overlay) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillboxPanel.classList.remove('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  overlay.classList.remove('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.body.style.overflow = '';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// Open pillbox from text link in step 2
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];window.openPillboxFromText = function() {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillboxPanel.classList.add('open');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  overlay.classList.add('active');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.body.style.overflow = 'hidden';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];};
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Overlay Click Handler ==========
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// Single handler for both sidebar and pillbox
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];overlay.addEventListener('click', () => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (sidebar.classList.contains('open')) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    closeSidebarPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (pillboxPanel.classList.contains('open')) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    closePillboxPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Pillbox Management =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function addToPillbox(supplement) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Check if already in pillbox
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const existingIndex = pillbox.findIndex(item => item.id === supplement.id);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (existingIndex >= 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    // Already in pillbox, just update quantity
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    pillbox[existingIndex].quantity = (pillbox[existingIndex].quantity || 1) + 1;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  } else {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    // Add new item
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    pillbox.push({
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      id: supplement.id,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      name: supplement.name,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      price: supplement.price,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      dailyPrice: supplement.dailyPrice,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      icon: supplement.icon,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      quantity: 1
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  savePillbox();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  updatePillboxUI();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Show feedback
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  showNotification(`${supplement.name} zur Pillenbox hinzugefügt`);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function removeFromPillbox(id) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillbox = pillbox.filter(item => item.id !== id);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  savePillbox();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  updatePillboxUI();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function savePillbox() {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  localStorage.setItem('pillbox', JSON.stringify(pillbox));
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function updatePillboxUI() {
  if (!pillboxContent || !pillboxTotal || !pillboxCount) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Update count
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const totalCount = pillbox.reduce((sum, item) => sum + (item.quantity || 1), 0);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillboxCount.textContent = totalCount;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Update panel content
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (pillbox.length === 0) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    pillboxContent.innerHTML = '<p class="empty-message">Deine Pillenbox ist leer.</p>';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  } else {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    pillboxContent.innerHTML = pillbox.map(item => `
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      <div class="pillbox-item" data-id="${item.id}">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        <div class="pillbox-item-info">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          <h4>${item.name}</h4>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          <div class="pillbox-item-meta">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];            <span class="pillbox-item-price">${item.price} × ${item.quantity || 1}</span>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          </div>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        </div>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        <div class="pillbox-item-actions">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          <button class="pillbox-item-remove" aria-label="${item.name} entfernen" data-id="${item.id}">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];              <line x1="18" y1="6" x2="6" y2="18"></line>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];              <line x1="6" y1="6" x2="18" y2="18"></line>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];            </svg>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];          </button>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        </div>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      </div>
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    `).join('');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Update total
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const totalPrice = pillbox.reduce((sum, item) => sum + ((item.dailyPrice || 0) * (item.quantity || 1)), 0);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  pillboxTotal.textContent = `${totalPrice.toFixed(2).replace('.', ',')} €`;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Add event listeners to remove buttons
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.querySelectorAll('.pillbox-item-remove').forEach(btn => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    btn.addEventListener('click', (e) => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      e.stopPropagation();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const id = btn.getAttribute('data-id');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      removeFromPillbox(id);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function showNotification(message) {
  if (!document.body) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Create notification element
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  const notification = document.createElement('div');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  notification.className = 'notification';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  notification.textContent = message;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  document.body.appendChild(notification);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Remove after 2 seconds
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  setTimeout(() => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    notification.style.animation = 'fadeOut 300ms ease forwards';
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    setTimeout(() => notification.remove(), 300);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }, 2000);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Smooth Scroll for Anchor Links =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];document.querySelectorAll('a[href^="#"]').forEach(anchor => {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  anchor.addEventListener('click', function(e) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    e.preventDefault();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    const targetId = this.getAttribute('href');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    const target = document.querySelector(targetId);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (target) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      const offsetTop = target.offsetTop - 80;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      window.scrollTo({
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        top: offsetTop,
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        behavior: 'smooth'
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];        } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  } catch (error) {
    console.error("Error during initialization:", error);
  }
  });
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== CSS for Notification (injected dynamically) =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];const notificationStyles = document.createElement('style');
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];notificationStyles.textContent = `
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  .notification {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    position: fixed;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    bottom: 20px;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    left: 50%;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    transform: translateX(-50%);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    background: var(--accent);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    color: var(--bg-primary);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    padding: 12px 24px;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    border-radius: var(--radius-full);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    font-size: 14px;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    font-weight: var(--font-weight-medium);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    z-index: 1000;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    box-shadow: var(--shadow-lg);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    animation: slideUp 300ms ease;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  @keyframes slideUp {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    from {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      opacity: 0;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      transform: translateX(-50%) translateY(20px);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    to {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      opacity: 1;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      transform: translateX(-50%) translateY(0);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  @keyframes fadeOut {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    from {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      opacity: 1;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      transform: translateX(-50%) translateY(0);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    to {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      opacity: 0;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      transform: translateX(-50%) translateY(-10px);
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];`;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];if (document.head) {
  document.head.appendChild(notificationStyles);
}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];// ===== Responsive Adjustments =====
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];function handleResize() {
  if (!sidebar || !pillboxPanel) return;
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  // Close panels on small screens when orientation changes
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  if (window.innerWidth <= 768) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    if (sidebar.classList.contains('open') || pillboxPanel.classList.contains('open')) {
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      closeSidebarPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];      closePillboxPanel();
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];    }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];  }
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];}
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];
let pillbox = JSON.parse(localStorage.getItem("pillbox")) || [];
if (!Array.isArray(pillbox)) pillbox = [];window.addEventListener('resize', handleResize);
