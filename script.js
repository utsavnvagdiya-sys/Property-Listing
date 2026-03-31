/* === RESET & BASE === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

:root {
  --classic-bg: #fdfdfb;
  --classic-dark: #1a1a17;
  --classic-accent: #c9a84d;
  --classic-border: #e2e2da;
  --classic-text: #222;
  --classic-muted: #666;
}

body {
  font-family: 'Lora', serif;
  background: var(--classic-bg);
  color: var(--classic-text);
  font-size: 15px;
  line-height: 1.8;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

/* === NAVBAR === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(253, 253, 251, 0.98);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--classic-border);
}

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  white-space: nowrap;
  color: var(--classic-dark);
  text-transform: uppercase;
}

.logo i {
  font-size: 18px;
  color: #111;
}

.logo strong {
  color: #111;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}

.nav-links a {
  font-size: 13px;
  font-weight: 500;
  color: #555;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  position: relative;
  padding-bottom: 2px;
}

.nav-links a:hover,
.nav-links a.active {
  color: #111;
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: #111;
  border-radius: 2px;
}

.btn-signin {
  margin-left: 20px;
  padding: 10px 24px;
  background: var(--classic-dark);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: all 0.3s;
  white-space: nowrap;
}

.btn-signin:hover {
  background: var(--classic-accent);
  transform: translateY(-2px);
}

/* === HERO === */
.hero {
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(92vh - 64px);
  max-height: 700px;
  background: #fff;
  overflow: hidden;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 40px 60px 80px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 76px);
  font-weight: 400;
  font-style: italic;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--classic-dark);
  margin-bottom: 24px;
}

.hero-sub {
  font-size: 16px;
  color: var(--classic-muted);
  max-width: 360px;
  margin-bottom: 40px;
  line-height: 1.8;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  max-width: 420px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-bar:focus-within {
  border-color: #111;
  box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08);
}

.search-bar i {
  padding: 0 14px;
  font-size: 15px;
  color: #aaa;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  padding: 14px 0;
  color: #111;
  background: transparent;
}

.search-bar input::placeholder {
  color: #bbb;
}

.search-bar button {
  width: 50px;
  height: 50px;
  background: #111;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar button:hover {
  background: #333;
}

.hero-image {
  position: relative;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s ease;
}

.hero-image:hover img {
  transform: scale(1.03);
}

/* === STATS === */
.stats {
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 36px 80px;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.stat-num {
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}

.stat-lbl {
  font-size: 12px;
  color: #888;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
}

.divider {
  width: 1px;
  height: 44px;
  background: #333;
  margin: 0 20px;
}

/* === LISTINGS SECTION === */
.listings-section {
  max-width: 1280px;
  margin: 80px auto;
  padding: 0 40px;
}

.listings-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
}

.section-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--classic-accent);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 500;
  color: var(--classic-dark);
  letter-spacing: -0.01em;
}

.see-all {
  font-size: 13px;
  font-weight: 600;
  color: #111;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1.5px solid #111;
  padding-bottom: 2px;
  transition: opacity 0.2s;
}

.see-all:hover {
  opacity: 0.6;
}

/* === PROPERTY GRID === */
.property-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* === PROPERTY CARD === */
.card {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--classic-border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: var(--classic-accent);
}

.card-img-wrap {
  position: relative;
  overflow: hidden;
  height: 210px;
}

.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover .card-img-wrap img {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #111;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  letter-spacing: 0.08em;
  border-radius: 4px;
  text-transform: uppercase;
}

.card-badge.sale {
  background: #c9a84c;
}

.card-fav {
  position: absolute;
  top: 12px;
  right: 14px;
  width: 34px;
  height: 34px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ccc;
  transition: color 0.2s, transform 0.2s;
  border: none;
  cursor: pointer;
}

.card-fav:hover,
.card-fav.active {
  color: #e53e3e;
  transform: scale(1.12);
}

.card-body {
  padding: 18px 20px 20px;
}

.card-price {
  font-size: 20px;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
}

.card-price span {
  font-size: 12px;
  font-weight: 500;
  color: #999;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  margin: 6px 0 4px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-location {
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 14px;
}

.card-location i {
  font-size: 11px;
  color: #bbb;
}

.card-meta {
  display: flex;
  gap: 16px;
  border-top: 1px solid #f0f0f0;
  padding-top: 14px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #777;
  font-weight: 500;
}

.meta-item i {
  font-size: 12px;
  color: #aaa;
}

/* === FILTERS BAR === */
.filters-bar {
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto 0;
}

/* === PROPERTY DETAIL PAGE === */
.detail-wrapper {
  max-width: 1100px;
  margin: 100px auto 80px;
  padding: 0 40px;
}

.detail-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 28px;
  transition: color 0.2s;
}

.detail-back:hover {
  color: #111;
}

.detail-images {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 420px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 40px;
}

.detail-img-main {
  grid-row: span 2;
  overflow: hidden;
}

.detail-img-main img,
.detail-img-sm img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.detail-img-main:hover img,
.detail-img-sm:hover img {
  transform: scale(1.04);
}

.detail-img-sm {
  overflow: hidden;
}

.detail-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
}

/* .detail-info {} */

.detail-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 4px;
  background: #f0f0f0;
  color: #555;
}

.tag.black {
  background: #111;
  color: #fff;
}

.detail-price-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}

.detail-price {
  font-size: 38px;
  font-weight: 900;
  color: #111;
  letter-spacing: -0.03em;
}

.detail-price-unit {
  font-size: 15px;
  color: #aaa;
  font-weight: 500;
}

.detail-address {
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
}

.detail-specs {
  display: flex;
  gap: 28px;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 28px;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spec-val {
  font-size: 18px;
  font-weight: 700;
  color: #111;
}

.spec-lbl {
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #aaa;
  font-weight: 600;
}

.detail-h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #111;
}

.detail-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  max-width: 600px;
}

/* Contact Card */
.contact-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  padding: 28px;
  position: sticky;
  top: 84px;
}

.contact-card .price-big {
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin-bottom: 4px;
}

.contact-card .price-sub {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 24px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 14px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #111;
  outline: none;
  margin-bottom: 12px;
  transition: border-color 0.2s;
  background: #fafafa;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #111;
  background: #fff;
}

.contact-form textarea {
  resize: none;
  height: 90px;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.2s, transform 0.1s;
}

.btn-primary:hover {
  background: #333;
  transform: translateY(-1px);
}

.btn-outline {
  width: 100%;
  padding: 13px;
  background: transparent;
  color: #111;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: border-color 0.2s, transform 0.1s;
}

.btn-outline:hover {
  border-color: #111;
  transform: translateY(-1px);
}

/* Actions row */
.detail-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  background: #f4f4f4;
  border: none;
  border-radius: 7px;
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.2s;
}

.action-btn:hover {
  background: #ebebeb;
  color: #111;
}

/* === ADD PROPERTY PAGE === */
.add-page {
  max-width: 600px;
  margin: 110px auto 80px;
  padding: 0 40px;
}

.add-page h2 {
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin-bottom: 6px;
}

.add-page .sub {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 36px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 13px 14px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #111;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #fff;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #111;
  box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group select {
  appearance: none;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.05em;
  margin-top: 10px;
  transition: background 0.2s, transform 0.1s;
}

.submit-btn:hover {
  background: #333;
  transform: translateY(-1px);
}



/* === FOOTER === */
.footer-top-map {
  width: 100%;
  height: 380px;
  background: #f7f7f5;
  border-top: 1px solid #ebebeb;
  position: relative;
  overflow: hidden;
}

.footer-top-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(1) contrast(1.1) opacity(0.8) invert(0.05);
  transition: filter 0.3s, opacity 0.3s;
}

.footer-top-map:hover iframe {
  filter: grayscale(0.5) contrast(1) opacity(1);
}

.footer {
  background: var(--classic-dark);
  color: #fff;
  padding: 100px 80px 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 80px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-brand .logo {
  color: #fff;
  margin-bottom: 14px;
}

.footer-brand .logo i {
  color: #fff;
}

.footer-links h4 {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 24px;
  color: var(--classic-accent);
}

.footer-links ul li {
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.footer-bottom {
  padding: 30px 0;
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer-links h4 {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #aaa;
  margin-bottom: 18px;
  font-weight: 700;
}

.footer-links ul li {
  margin-bottom: 10px;
}

.footer-links a {
  font-size: 13px;
  color: #666;
  transition: color 0.2s;
}



.footer-bottom {
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
  color: #555;
}

/* === TOAST === */
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #111;
  color: #fff;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .hero-image {
    height: 300px;
  }

  .hero-content {
    padding: 50px 40px;
  }

  .detail-body {
    grid-template-columns: 1fr;
  }

  .contact-card {
    position: static;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .property-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
  }

  .divider {
    width: 60px;
    height: 1px;
  }

  .hero-content {
    padding: 40px 20px;
  }

  .listings-section {
    padding: 0 20px;
  }

  .nav-links {
    display: none;
  }

  .footer {
    padding: 40px 20px 0;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .detail-wrapper {
    padding: 0 20px;
  }

  .detail-images {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }

  .detail-img-main {
    grid-row: span 1;
    height: 260px;
  }

  .detail-img-sm {
    height: 140px;
  }

  .modal-body {
    padding: 40px 24px;
  }
}

/* === MODAL SYSTEM === */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(26, 26, 23, 0.85);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  padding: 20px;
}

.modal-overlay.active { opacity: 1; visibility: visible; }

.modal-container {
  background: var(--classic-bg);
  width: 100%;
  max-width: 540px;
  border-radius: 4px;
  position: relative;
  transform: translateY(30px) scale(0.98);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  overflow: hidden;
  border: 1px solid var(--classic-border);
}

.modal-overlay.active .modal-container { transform: translateY(0) scale(1); }

.modal-close {
  position: absolute;
  top: 20px; right: 20px;
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: var(--classic-muted);
  cursor: pointer; transition: all 0.2s;
  z-index: 10;
  background: transparent;
  border: none;
}
.modal-close:hover { color: var(--classic-dark); transform: rotate(90deg); }

.modal-body { padding: 50px 60px; }

.modal-icon {
  width: 64px; height: 64px;
  background: rgba(201, 168, 77, 0.1);
  color: var(--classic-accent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; margin: 0 auto 24px;
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px; font-weight: 400; text-align: center;
  color: var(--classic-dark); margin-bottom: 12px;
}

.modal-text {
  font-size: 15px; color: var(--classic-muted);
  text-align: center; line-height: 1.7; margin-bottom: 32px;
}

/* === PREMIUM FORM STYLING === */
.premium-form { display: flex; flex-direction: column; gap: 16px; }

.form-group-premium { display: flex; flex-direction: column; gap: 6px; }

.form-group-premium label {
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.15em; color: var(--classic-muted);
}

.form-group-premium input,
.form-group-premium select,
.form-group-premium textarea {
  width: 100%; padding: 14px 16px;
  border: 1px solid var(--classic-border);
  background: #fff; border-radius: 4px;
  font-family: 'Inter', sans-serif; font-size: 13px;
  color: var(--classic-dark); outline: none;
  transition: all 0.3s;
}

.form-group-premium input:focus,
.form-group-premium select:focus,
.form-group-premium textarea:focus {
  border-color: var(--classic-accent);
  background: #fff; box-shadow: 0 0 0 4px rgba(201, 168, 77, 0.05);
}

.form-group-premium textarea { resize: none; height: 100px; }

.btn-classic {
  width: 100%; padding: 16px;
  background: var(--classic-dark); color: #fff;
  border: none; border-radius: 4px;
  font-family: 'Inter', sans-serif; font-size: 11px;
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.2em; cursor: pointer;
  transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px;
}

.btn-classic:hover { background: var(--classic-accent); transform: translateY(-2px); }

.btn-classic-outline {
  width: 100%; padding: 15px;
  background: transparent; color: var(--classic-dark);
  border: 1px solid var(--classic-border); border-radius: 4px;
  font-family: 'Inter', sans-serif; font-size: 11px;
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.2em; cursor: pointer;
  transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px;
}

.btn-classic-outline:hover { border-color: var(--classic-dark); background: rgba(0,0,0,0.02); }
