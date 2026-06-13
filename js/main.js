// ===== Pillenbox (localStorage) =====
let pillBox = JSON.parse(localStorage.getItem('evidencedPillBox')) || [];

// DOM-Elemente
const pillboxDrawer = document.getElementById('pillbox-drawer');
const pillboxItems = document.getElementById('pillbox-items');
const pillboxTotalPrice = document.getElementById('pillbox-total-price');
const pillboxCount = document.getElementById('pillbox-count');

// Pillenbox anzeigen/verstecken
function togglePillBox() {
  if (pillboxDrawer) {
    pillboxDrawer.classList.toggle('open');
  }
}

// Supplement zur Pillenbox hinzufügen
function addToPillBox(supplementId) {
  const supplement = supplements.find(s => s.id === supplementId);
  if (!supplement) return;

  if (pillBox.some(item => item.id === supplementId)) {
    alert('Dieses Supplement ist bereits in deiner Pillenbox.');
    return;
  }

  pillBox.push({
    id: supplement.id,
    name: supplement.name,
    pricePerDay: supplement.pricePerDay,
    amazonLink: supplement.amazonLink || ""
  });

  savePillBox();
  renderPillBox();
  togglePillBox();
}

// Supplement aus der Pillenbox entfernen
function removeFromPillBox(index) {
  pillBox.splice(index, 1);
  savePillBox();
  renderPillBox();
}

// Pillenbox speichern (localStorage)
function savePillBox() {
  localStorage.setItem('evidencedPillBox', JSON.stringify(pillBox));
}

// Pillenbox rendern
function renderPillBox() {
  if (!pillboxItems || !pillboxTotalPrice || !pillboxCount) return;

  if (pillBox.length === 0) {
    pillboxItems.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Deine Pillenbox ist leer.</p>';
    pillboxTotalPrice.textContent = '0,00 €';
    pillboxCount.textContent = '0';
    return;
  }

  let html = '';
  let totalPrice = 0;

  pillBox.forEach((item, index) => {
    totalPrice += item.pricePerDay;
    html += `
      <div class="pillbox-item">
        <div class="pillbox-item-info">
          <h4>${item.name}</h4>
          <span class="price">${item.pricePerDay.toFixed(2).replace('.', ',')} € / Tag</span>
        </div>
        <div class="pillbox-item-actions">
          ${item.amazonLink ? `<a href="${item.amazonLink}" target="_blank" rel="sponsored" class="btn btn-small btn-secondary">Kaufen</a>` : ''}
          <button onclick="removeFromPillBox(${index})" class="btn btn-small" style="background: var(--bg);">×</button>
        </div>
      </div>
    `;
  });

  pillboxItems.innerHTML = html;
  pillboxTotalPrice.textContent = `${totalPrice.toFixed(2).replace('.', ',')} €`;
  pillboxCount.textContent = pillBox.length;
}

// ===== Supplement-Karten rendern =====
function renderSupplementCards(containerId, supplementIds) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const itemsToRender = supplementIds
    ? supplements.filter(s => supplementIds.includes(s.id))
    : supplements;

  container.innerHTML = itemsToRender.map(supplement => `
    <div class="supplement-card" data-id="${supplement.id}">
      <img src="${supplement.image}" alt="${supplement.name}" class="supplement-image">
      <div class="evidence-badge evidence-${getEvidenceClass(supplement.evidence)}">
        ${getEvidenceStars(supplement.evidence)} ${supplement.evidence}
      </div>
      <h3>${supplement.name}</h3>
      <p>${supplement.shortDescription}</p>
      <div class="supplement-meta">
        <span class="price">${supplement.pricePerDay.toFixed(2).replace('.', ',')} € / Tag</span>
        <span class="category">${supplement.category.join(', ')}</span>
      </div>
      <div class="supplement-actions">
        <button onclick="addToPillBox('${supplement.id}')" class="btn btn-small btn-primary">Zur Box hinzufügen</button>
        ${supplement.amazonLink ? `<a href="${supplement.amazonLink}" target="_blank" rel="sponsored" class="btn btn-small btn-secondary">Kaufen</a>` : ''}
      </div>
      <details class="supplement-details">
        <summary>Mehr Infos</summary>
        <div class="supplement-details-content">
          <p><strong>Wirkung:</strong> ${supplement.description}</p>
          ${supplement.dosage ? `<p><strong>Dosierung:</strong> ${supplement.dosage}</p>` : ''}
          ${supplement.notes ? `<p><strong>Hinweise:</strong> ${supplement.notes}</p>` : ''}
          ${supplement.studies?.length ? `
            <p><strong>Studien:</strong></p>
            <ul>
              ${supplement.studies.map(study => `
                <li>
                  <a href="${study.link}" target="_blank" rel="noopener">${study.title}</a>
                  <p>${study.summary}</p>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      </details>
    </div>
  `).join('');
}

// ===== Stack-Karten rendern =====
function renderStackCards() {
  const container = document.getElementById('stack-grid');
  if (!container) return;

  container.innerHTML = stacks.map(stack => {
    const stackSupplements = stack.supplements.map(id => supplements.find(s => s.id === id));
    const totalPrice = stackSupplements.reduce((sum, s) => sum + (s ? s.pricePerDay : 0), 0);

    return `
      <div class="stack-card" data-id="${stack.id}">
        <img src="${stack.image}" alt="${stack.name}" class="stack-image">
        <h3>${stack.name}</h3>
        <p>${stack.description}</p>
        <div class="stack-meta">
          <span class="price">${totalPrice.toFixed(2).replace('.', ',')} € / Tag</span>
          <span class="category">${stack.category}</span>
        </div>
        <div class="stack-actions">
          <button onclick="addStackToPillBox('${stack.id}')" class="btn btn-small btn-primary">Stack zur Box hinzufügen</button>
        </div>
        ${stack.tools?.length ? `
          <div class="stack-tools">
            ${stack.tools.map(tool => `
              ${tool === 'bmi-rechner' ? '<button onclick="showBMICalculator()" class="btn btn-small btn-secondary">BMI-Rechner</button>' : ''}
              ${tool === 'kcal-rechner' ? '<button onclick="showKcalCalculator()" class="btn btn-small btn-secondary">kcal-Bedarf</button>' : ''}
            `).join('')}
          </div>
        ` : ''}
        <details class="stack-details">
          <summary>Mehr Infos</summary>
          <div class="stack-details-content">
            <p><strong>Enthaltene Supplements:</strong></p>
            <ul>
              ${stackSupplements.map(s => s ? `<li>${s.name} (${s.pricePerDay.toFixed(2).replace('.', ',')} €/Tag)</li>` : '').join('')}
            </ul>
            ${stack.notes ? `<p><strong>Hinweise:</strong> ${stack.notes}</p>` : ''}
          </div>
        </details>
      </div>
    `;
  }).join('');
}

// Stack zur Pillenbox hinzufügen
function addStackToPillBox(stackId) {
  const stack = stacks.find(s => s.id === stackId);
  if (!stack) return;

  const allInBox = stack.supplements.every(id => pillBox.some(item => item.id === id));
  if (allInBox) {
    alert('Alle Supplements dieses Stacks sind bereits in deiner Pillenbox.');
    return;
  }

  stack.supplements.forEach(id => {
    const supplement = supplements.find(s => s.id === id);
    if (supplement && !pillBox.some(item => item.id === id)) {
      pillBox.push({
        id: supplement.id,
        name: supplement.name,
        pricePerDay: supplement.pricePerDay,
        amazonLink: supplement.amazonLink || ""
      });
    }
  });

  savePillBox();
  renderPillBox();
  togglePillBox();
}

// ===== News rendern =====
function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

  container.innerHTML = news.map(item => `
    <div class="news-card">
      <div class="news-date">${item.date}</div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <a href="${item.link}" target="_blank" rel="noopener">Zur Quelle →</a>
    </div>
  `).join('');
}

// ===== Tools (BMI-Rechner, kcal-Bedarf) =====
function showBMICalculator() {
  const toolsContainer = document.getElementById('tools-container');
  if (!toolsContainer) return;
  
  toolsContainer.innerHTML = `
    <div class="tool-card">
      <h3>BMI-Rechner</h3>
      <div class="tool-form">
        <input type="number" id="bmi-weight" class="tool-input" placeholder="Gewicht (kg)" min="40" max="200">
        <input type="number" id="bmi-height" class="tool-input" placeholder="Größe (cm)" min="140" max="220">
        <button onclick="calculateBMI()" class="btn btn-primary">BMI berechnen</button>
      </div>
      <div id="bmi-result" class="tool-result" style="display: none;"></div>
    </div>
  `;
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value) / 100; // cm → m
  const resultEl = document.getElementById('bmi-result');

  if (!weight || !height) {
    resultEl.textContent = "Bitte gib Gewicht und Größe ein.";
    resultEl.style.display = "block";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let category = "";

  if (bmi < 18.5) category = "Untergewicht";
  else if (bmi < 25) category = "Normalgewicht";
  else if (bmi < 30) category = "Übergewicht";
  else if (bmi < 35) category = "Adipositas Grad I";
  else if (bmi < 40) category = "Adipositas Grad II";
  else category = "Adipositas Grad III";

  resultEl.innerHTML = `
    <strong>Dein BMI: ${bmi}</strong><br>
    <span>${category}</span>
  `;
  resultEl.style.display = "block";
}

function showKcalCalculator() {
  const toolsContainer = document.getElementById('tools-container');
  if (!toolsContainer) return;
  
  toolsContainer.innerHTML = `
    <div class="tool-card">
      <h3>kcal-Bedarfsrechner</h3>
      <div class="tool-form">
        <select id="kcal-gender" class="tool-input">
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
        </select>
        <input type="number" id="kcal-age" class="tool-input" placeholder="Alter (Jahre)" min="18" max="120">
        <input type="number" id="kcal-weight" class="tool-input" placeholder="Gewicht (kg)" min="40" max="200">
        <input type="number" id="kcal-height" class="tool-input" placeholder="Größe (cm)" min="140" max="220">
        <select id="kcal-activity" class="tool-input">
          <option value="1.2">Kaum Bewegung (Bürojob)</option>
          <option value="1.375">Leichte Aktivität (1–3x Sport/Woche)</option>
          <option value="1.55" selected>Mäßige Aktivität (3–5x Sport/Woche)</option>
          <option value="1.725">Sehr aktiv (6–7x Sport/Woche)</option>
          <option value="1.9">Extrem aktiv (täglich Sport + körperliche Arbeit)</option>
        </select>
        <button onclick="calculateKcal()" class="btn btn-primary">kcal berechnen</button>
      </div>
      <div id="kcal-result" class="tool-result" style="display: none;"></div>
    </div>
  `;
}

function calculateKcal() {
  const gender = document.getElementById('kcal-gender').value;
  const age = parseInt(document.getElementById('kcal-age').value);
  const weight = parseFloat(document.getElementById('kcal-weight').value);
  const height = parseFloat(document.getElementById('kcal-height').value);
  const activity = parseFloat(document.getElementById('kcal-activity').value);
  const resultEl = document.getElementById('kcal-result');

  if (!age || !weight || !height) {
    resultEl.textContent = "Bitte fülle alle Felder aus.";
    resultEl.style.display = "block";
    return;
  }

  // Harris-Benedict-Formel
  let bmr;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  const tdee = Math.round(bmr * activity);
  const weightLoss = Math.round(tdee * 0.85); // 15% Defizit
  const weightGain = Math.round(tdee * 1.15); // 15% Überschuss

  resultEl.innerHTML = `
    <strong>Dein Grundumsatz:</strong> ${Math.round(bmr)} kcal<br>
    <strong>Dein Erhaltungsbedarf:</strong> ${tdee} kcal<br>
    <strong>Zum Abnehmen (~0.5 kg/Woche):</strong> ${weightLoss} kcal<br>
    <strong>Zum Zunehmen (~0.5 kg/Woche):</strong> ${weightGain} kcal
  `;
  resultEl.style.display = "block";
}

// ===== Filter-Funktionen =====
function filterSupplements() {
  const evidenceFilter = document.getElementById('evidence-filter')?.value || 'all';
  const categoryFilter = document.getElementById('category-filter')?.value || 'all';
  const searchFilter = (document.getElementById('search-filter')?.value || '').toLowerCase();

  const filteredSupplements = supplements.filter(supplement => {
    const matchesEvidence = evidenceFilter === 'all' || supplement.evidence === evidenceFilter;
    const matchesCategory = categoryFilter === 'all' || supplement.category.includes(categoryFilter);
    const matchesSearch = searchFilter === '' ||
      supplement.name.toLowerCase().includes(searchFilter) ||
      supplement.description.toLowerCase().includes(searchFilter) ||
      supplement.tags.some(tag => tag.includes(searchFilter));

    return matchesEvidence && matchesCategory && matchesSearch;
  });

  renderSupplementCards('all-supplements-grid', filteredSupplements.map(s => s.id));
}

// ===== Hilfsfunktionen =====
function getEvidenceClass(evidence) {
  const classes = {
    stark: 'strong',
    mittel: 'medium',
    schwach: 'weak'
  };
  return classes[evidence] || 'medium';
}

function getEvidenceStars(evidence) {
  const stars = {
    stark: '⭐⭐⭐⭐⭐',
    mittel: '⭐⭐⭐',
    schwach: '⭐⭐'
  };
  return stars[evidence] || '⭐⭐⭐';
}

// ===== Initialisierung =====
document.addEventListener('DOMContentLoaded', () => {
  // Pillenbox rendern
  renderPillBox();

  // Supplement-Karten auf der Startseite rendern (Featured)
  if (document.getElementById('featured-supplements')) {
    const featuredIds = ['omega-3', 'vitamin-d3-k2', 'magnesium', 'kreatin', 'high-protein', 'zink'];
    renderSupplementCards('featured-supplements', featuredIds);
  }

  // Supplement-Karten auf supplements.html rendern
  if (document.getElementById('all-supplements-grid')) {
    renderSupplementCards('all-supplements-grid');
  }

  // Stack-Karten rendern
  if (document.getElementById('stack-grid')) {
    renderStackCards();
  }

  // Weak Evidence-Karten rendern
  if (document.getElementById('weak-evidence-grid')) {
    const weakSupplements = supplements.filter(s => s.evidence === 'schwach');
    renderSupplementCards('weak-evidence-grid', weakSupplements.map(s => s.id));
  }

  // News rendern
  if (document.getElementById('news-grid')) {
    renderNews();
  }
});
