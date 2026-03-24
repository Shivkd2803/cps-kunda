
// ── DATA STORES ────────────────────────────────────────────
const notices = [
  { id: 1, title: 'Parent-Teacher Meeting — Classes 6 to 10', date: '20 Mar 2026', desc: 'PTM scheduled for all classes 6–10. Parents are requested to collect report cards.', cat: 'event' },
  { id: 2, title: 'Annual Sports Day — 15 April 2026', date: '18 Mar 2026', desc: 'Annual Sports Day registrations open. Students can sign up for track, field, and team events.', cat: 'sport' },
  { id: 3, title: 'Board Exam Schedule — Class 10', date: '12 Mar 2026', desc: 'CBSE Class 10 board exams begin from 15 February 2026. Hall tickets available from the office.', cat: 'exam' },
  { id: 4, title: 'Summer Vacation Notice', date: '8 Mar 2026', desc: 'School will remain closed from 1st May to 30th June for summer holidays. Classes resume 1 July.', cat: 'holiday' },
  { id: 5, title: 'Unit Test 4 Results Published', date: '5 Mar 2026', desc: 'Unit Test 4 results for Classes 6–10 are now available. Students can check results online.', cat: 'result' },
  { id: 6, title: 'Science Exhibition — 10 April 2026', date: '1 Mar 2026', desc: 'Inter-school Science Exhibition. Students from Classes 8–10 can register their projects.', cat: 'event' },
];

const reviews = [
  { name: 'Priya Mehta', role: 'Parent', cls: 'Class 5', stars: 5, text: 'Exceptional school with dedicated teachers. My daughter has grown so much academically and personally. The faculty truly cares about each child.' },
  { name: 'Amit Singh', role: 'Parent', cls: 'Class 3', stars: 5, text: 'The CBSE curriculum is well-implemented here. My son loves going to school every day, which says everything about the environment.' },
  { name: 'Sunita Kapoor', role: 'Parent', cls: 'Class 2', stars: 5, text: 'Wonderful experience for our family. The school communicates regularly with parents and truly partners with us in our child\'s education.' },
  { name: 'Rohan Das', role: 'Student', cls: 'Class 10', stars: 5, text: 'I\'ve been a student here for 8 years. CPS taught me not just subjects but how to be a good person. I\'ll always be grateful.' },
  { name: 'Kavita Sharma', role: 'Parent', cls: 'Class 7', stars: 4, text: 'Great co-curricular activities. My child is thriving in music and sports alongside academics. Very holistic approach.' },
  { name: 'Deepak Verma', role: 'Alumni', cls: '2023 Batch', stars: 5, text: 'CPS prepared me so well for Class 11. The foundation in science and math was exceptional. Miss this school every day!' },
];

const payHistory = [
  { date: '24 Dec 2025', quarter: 'Q3 (Oct–Dec)', amount: '₹16,300', method: 'UPI', txn: 'TXN9834761023', status: 'paid' },
  { date: '25 Sep 2025', quarter: 'Q2 (Jul–Sep)', amount: '₹16,300', method: 'Net Banking', txn: 'TXN7821045932', status: 'paid' },
  { date: '10 Jun 2025', quarter: 'Q1 (Apr–Jun)', amount: '₹16,300', method: 'Credit Card', txn: 'TXN6710234891', status: 'paid' },
  { date: '15 Mar 2025', quarter: 'Q4 (Jan–Mar)', amount: '₹16,300', method: 'UPI', txn: 'TXN5601938274', status: 'paid' },
];

const resultData = {
  name: 'Aarav Sharma', meta: 'Class 9-B · Roll No. CPS-2025-0042 · Annual Exam 2025',
  pct: '88.4%',
  subjects: [
    { sub: 'English', max: 100, obt: 91, grade: 'A1', rem: 'Excellent' },
    { sub: 'Hindi', max: 100, obt: 85, grade: 'A2', rem: 'Very Good' },
    { sub: 'Mathematics', max: 100, obt: 93, grade: 'A1', rem: 'Excellent' },
    { sub: 'Science', max: 100, obt: 88, grade: 'A1', rem: 'Excellent' },
    { sub: 'Social Science', max: 100, obt: 82, grade: 'A2', rem: 'Very Good' },
    { sub: 'Computer Science', max: 100, obt: 90, grade: 'A1', rem: 'Excellent' },
  ]
};

const searchIndex = [
  { section: 'About Us', title: 'About Children Paradise School', snippet: 'Founded in 1995, beacon of quality education for Pre-Primary to Class 10.', page: 'home', hash: 'about' },
  { section: 'Programmes', title: 'Pre-Primary Programme', snippet: 'Play-based learning for Ages 3–5 (Nursery, LKG, UKG).', page: 'home', hash: 'programmes' },
  { section: 'Programmes', title: 'Primary School (Classes 1–5)', snippet: 'Balanced curriculum covering core subjects, languages, arts.', page: 'home', hash: 'programmes' },
  { section: 'Programmes', title: 'Middle School (Classes 6–8)', snippet: 'STEM focus, project-based learning, student leadership.', page: 'home', hash: 'programmes' },
  { section: 'Programmes', title: 'Secondary School (Classes 9–10)', snippet: 'Class 10 board exam preparation with dedicated mentorship.', page: 'home', hash: 'programmes' },
  { section: 'Gallery', title: 'Gallery — Classroom Learning', snippet: 'Photos from classroom sessions and activities.', page: 'home', hash: 'gallery' },
  { section: 'Gallery', title: 'Gallery — Sports Day', snippet: 'Annual Sports Day events and competitions.', page: 'home', hash: 'gallery' },
  { section: 'Admissions', title: 'Admissions 2026–27', snippet: 'Apply now for the new academic year. Simple 4-step process.', page: 'home', hash: 'admissions' },
  { section: 'Fee Payment', title: 'Online Fee Payment', snippet: 'Pay school fees securely online. UPI, Card, Net Banking.', page: 'fees', hash: '' },
  { section: 'Results', title: 'Student Results Portal', snippet: 'Check exam results, download marksheet, view grades.', page: 'results', hash: '' },
  { section: 'Contact', title: 'Contact Us', snippet: '14 Paradise Lane, Sector 7, New Delhi. +91 11 9876 5432.', page: 'home', hash: 'contact' },
  { section: 'Notices', title: 'Parent-Teacher Meeting', snippet: 'PTM for Classes 6–10 on 20 March 2026.', page: 'home', hash: 'notices' },
  { section: 'Notices', title: 'Annual Sports Day', snippet: 'Sports Day registrations open for all students.', page: 'home', hash: 'notices' },
  { section: 'Notices', title: 'Board Exam Schedule', snippet: 'CBSE Class 10 board exams begin 15 February 2026.', page: 'home', hash: 'notices' },
];

// ── PAGE MANAGEMENT ─────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navLinks.classList.remove('open');
}

function navTo(hash) {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

// ── HAMBURGER ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── SCROLL REVEAL ───────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── TICKER ──────────────────────────────────────────────────
function buildTicker() {
  const items = notices.map(n => `<span class="ticker-item">${n.title}</span>`).join('');
  const ti = document.getElementById('tickerInner');
  ti.innerHTML = items + items; // duplicate for seamless loop
}

// ── NOTICES ─────────────────────────────────────────────────
function renderNotices() {
  const grid = document.getElementById('noticesGrid');
  const list = document.getElementById('adminNoticeList');
  grid.innerHTML = notices.map(n => `
    <div class="notice-card reveal">
      <div class="notice-date">${n.date}</div>
      <h4>${n.title}</h4>
      <p>${n.desc}</p>
      <span class="notice-tag tag-${n.cat === 'result' ? 'event' : n.cat}" style="${n.cat === 'result' ? 'background:rgba(168,85,247,0.15);color:#c4b5fd;' : ''}">${n.cat.charAt(0).toUpperCase() + n.cat.slice(1)}</span>
    </div>`).join('');
  if (list) list.innerHTML = notices.map(n => `
    <div class="an-item">
      <div class="an-info"><h5>${n.title}</h5><p>${n.date} · ${n.cat}</p></div>
      <div class="an-actions">
        <button class="btn-edit" onclick="showToast('Editing notice…')">Edit</button>
        <button class="btn-delete" onclick="deleteNotice(${n.id})">Delete</button>
      </div>
    </div>`).join('');
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  buildTicker();
}

function addNotice() {
  const title = document.getElementById('adm-notice-title').value.trim();
  const desc = document.getElementById('adm-notice-desc').value.trim();
  const cat = document.getElementById('adm-notice-cat').value;
  const date = document.getElementById('adm-notice-date').value || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  if (!title) { showToast('Please enter a notice title.'); return; }
  notices.unshift({ id: Date.now(), title, desc: desc || 'No additional details.', cat, date });
  document.getElementById('adm-notice-title').value = '';
  document.getElementById('adm-notice-desc').value = '';
  renderNotices();
  showToast('Notice published successfully! 📢');
}

function deleteNotice(id) {
  const idx = notices.findIndex(n => n.id === id);
  if (idx > -1) { notices.splice(idx, 1); renderNotices(); showToast('Notice deleted.'); }
}

// ── GALLERY ──────────────────────────────────────────────────
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryData = Array.from(galleryItems).map(item => ({
  src: item.querySelector('img').src,
  caption: item.querySelector('.gallery-overlay span').textContent
}));
let currentIndex = 0;

const filterBtns = document.querySelectorAll('.gf-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  const d = galleryData[currentIndex];
  lbImg.src = d.src; lbCaption.textContent = d.caption;
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}
document.getElementById('lbPrev').addEventListener('click', () => { currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length; updateLightbox(); });
document.getElementById('lbNext').addEventListener('click', () => { currentIndex = (currentIndex + 1) % galleryData.length; updateLightbox(); });
document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

function addGalleryItem() {
  const caption = document.getElementById('gal-caption').value.trim() || 'New Photo';
  const cat = document.getElementById('gal-cat').value;
  const count = parseInt(document.getElementById('galCount').textContent) + 1;
  document.getElementById('galCount').textContent = count;
  galleryData.push({ src: `https://picsum.photos/seed/new${count}/600/500`, caption });
  showToast(`Photo "${caption}" added to gallery! 🖼️`);
  document.getElementById('gal-caption').value = '';
}

// ── REVIEWS ──────────────────────────────────────────────────
function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
    <div class="review-card reveal">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p>"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
        <div><strong>${r.name}</strong><span>${r.role} · ${r.cls}</span></div>
      </div>
    </div>`).join('');
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

// Star picker
let selectedStars = 5;
document.querySelectorAll('#starPicker span').forEach(s => {
  s.addEventListener('mouseover', () => {
    const val = parseInt(s.dataset.val);
    document.querySelectorAll('#starPicker span').forEach((x, i) => x.classList.toggle('active', i < val));
  });
  s.addEventListener('click', () => {
    selectedStars = parseInt(s.dataset.val);
    document.querySelectorAll('#starPicker span').forEach((x, i) => x.classList.toggle('active', i < selectedStars));
  });
});
document.querySelectorAll('#starPicker span').forEach((s, i) => s.classList.toggle('active', i < selectedStars));
document.getElementById('starPicker').addEventListener('mouseleave', () => {
  document.querySelectorAll('#starPicker span').forEach((x, i) => x.classList.toggle('active', i < selectedStars));
});

document.getElementById('reviewForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('rv-name').value.trim();
  const role = document.getElementById('rv-role').value;
  const cls = document.getElementById('rv-class').value.trim() || role;
  const text = document.getElementById('rv-text').value.trim();
  if (!name || !text) return;
  reviews.unshift({ name, role, cls, stars: selectedStars, text });
  renderReviews();
  this.reset();
  document.querySelectorAll('#starPicker span').forEach((x, i) => x.classList.toggle('active', i < 5));
  selectedStars = 5;
  const msg = document.getElementById('reviewMsg');
  msg.style.display = 'block';
  setTimeout(() => msg.style.display = 'none', 4000);
});

// ── ADMISSIONS FORM ─────────────────────────────────────────
document.getElementById('admissionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = document.getElementById('admFormMsg');
  msg.style.display = 'block';
  this.reset();
  setTimeout(() => msg.style.display = 'none', 5000);
});

// ── PAYMENT HISTORY ─────────────────────────────────────────
function renderPayHistory() {
  document.getElementById('payHistoryBody').innerHTML = payHistory.map(p => `
    <tr>
      <td>${p.date}</td><td>${p.quarter}</td><td><strong>${p.amount}</strong></td>
      <td>${p.method}</td><td style="font-family:monospace;font-size:12px;">${p.txn}</td>
      <td><span class="status-paid">✓ Paid</span></td>
      <td><button class="receipt-btn" onclick="openModal('receiptModal')">🧾 Receipt</button></td>
    </tr>`).join('');
}

function processPayment() {
  const pm = document.querySelector('.pay-method.selected');
  if (!pm) { showToast('Please select a payment method.'); return; }
  // Simulate processing
  showToast('Processing payment… Please wait.');
  setTimeout(() => {
    const newPay = { date: 'Today', quarter: document.getElementById('fee-quarter').value, amount: '₹16,300', method: pm.querySelector('.pm-label').textContent, txn: 'TXN' + Math.floor(Math.random() * 9999999999), status: 'paid' };
    payHistory.unshift(newPay);
    renderPayHistory();
    openModal('paySuccessModal');
  }, 1800);
}

document.querySelectorAll('.pay-method').forEach(m => {
  m.addEventListener('click', () => {
    document.querySelectorAll('.pay-method').forEach(x => x.classList.remove('selected'));
    m.classList.add('selected');
    const pm = m.dataset.pm;
    document.getElementById('upi-fields').style.display = pm === 'upi' ? 'block' : 'none';
  });
});

// ── RESULTS ──────────────────────────────────────────────────
function searchResult() {
  const q = document.getElementById('resultSearch').value.trim().toLowerCase();
  document.getElementById('res-name').textContent = resultData.name;
  document.getElementById('res-meta').textContent = resultData.meta;
  document.getElementById('res-pct').textContent = resultData.pct;
  document.getElementById('resultTableBody').innerHTML = resultData.subjects.map(s => `
    <tr>
      <td>${s.sub}</td><td>${s.max}</td><td><strong>${s.obt}</strong></td>
      <td class="grade-${s.grade[0]}">${s.grade}</td><td>${s.rem}</td>
    </tr>`).join('');
  document.getElementById('resultDisplay').style.display = 'block';
  showToast('Results loaded for ' + (q || 'Aarav Sharma'));
}

// ── ADMIN TABS ───────────────────────────────────────────────
function switchAdminTab(panel, btn) {
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ap-' + panel).classList.add('active');
}

// ── PORTAL ───────────────────────────────────────────────────
function switchPortalTab(tab, btn) {
  document.querySelectorAll('.portal-tab-mini').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const labels = { parent: 'Parent Mobile / Email', student: 'Roll Number / Student ID', teacher: 'Staff ID / Email' };
  document.getElementById('portal-id-label').textContent = labels[tab];
}

function portalLogin(e) {
  e.preventDefault();
  showToast('Login successful! Redirecting…');
  setTimeout(() => showPage('home'), 1200);
}

function togglePass() {
  const input = document.getElementById('portal-pass');
  input.type = input.type === 'password' ? 'text' : 'password';
}

// ── SEARCH ───────────────────────────────────────────────────
document.getElementById('navSearchBtn').addEventListener('click', () => {
  document.getElementById('searchOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
});
document.getElementById('searchClose').addEventListener('click', closeSearch);
document.getElementById('searchClear').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
});

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  const res = document.getElementById('searchResults');
  if (!q) { res.innerHTML = ''; return; }
  const matches = searchIndex.filter(x =>
    x.title.toLowerCase().includes(q) || x.snippet.toLowerCase().includes(q) || x.section.toLowerCase().includes(q)
  );
  if (!matches.length) { res.innerHTML = '<p style="color:rgba(255,255,255,0.4);text-align:center;padding:20px;">No results found.</p>'; return; }
  res.innerHTML = matches.slice(0, 6).map(m => `
    <div class="search-result-item" onclick="handleSearchClick('${m.page}','${m.hash}')">
      <div class="sr-section">${m.section}</div>
      <div class="sr-title">${m.title}</div>
      <div class="sr-snippet">${m.snippet}</div>
    </div>`).join('');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('searchOverlay').classList.contains('open')) closeSearch();
});

function handleSearchClick(page, hash) {
  closeSearch();
  if (page !== 'home') { showPage(page); }
  else if (hash) { showPage('home'); setTimeout(() => { const el = document.getElementById(hash); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }
}

// ── MODAL ────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
});

// ── TOAST ────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── SIMULATE UPLOAD ──────────────────────────────────────────
function simulateUpload() {
  showToast('File selected. Ready to upload. ✓');
}

// ── INIT ──────────────────────────────────────────────────────
renderNotices();
renderReviews();
renderPayHistory();
