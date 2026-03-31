// ===== DATA =====
let properties = JSON.parse(localStorage.getItem('gr_properties')) || [
  {
    id: 1,
    title: 'Luxury Penthouse Suite',
    price: '$478',
    fullPrice: '$478,000',
    location: 'Fittys, Delcobe Road, No. 108',
    type: 'Apartment',
    badge: 'FOR RENT',
    badgeType: '',
    beds: 3,
    baths: 2,
    area: '1,240',
    image: 'p1.png',
    images: ['p1.png', 'p2.png', 'p3.png'],
    description: 'Discover your ideal urban retreat in this stunning penthouse apartment. The living features 3 bedrooms, 2 bathrooms and an open-plan concept kitchen with premium appliances. Floor-to-ceiling windows offer panoramic city views and the space is drenched in natural light throughout the day.',
    featured: true
  },
  {
    id: 2,
    title: 'Modern Loft Apartment',
    price: '$512',
    fullPrice: '$512,000',
    location: 'Liptening Central Road, No. 1034',
    type: 'Apartment',
    badge: 'FOR RENT',
    badgeType: '',
    beds: 2,
    baths: 1,
    area: '980',
    image: 'p2.png',
    images: ['p2.png', 'p3.png', 'p4.png'],
    description: 'A beautifully designed modern loft in the heart of the city. Features an open plan living and cooking space, designer kitchen with marble surfaces and large windows. Perfect for professionals seeking a sleek, contemporary lifestyle.',
    featured: false
  },
  {
    id: 3,
    title: 'Contemporary Villa Home',
    price: '$698',
    fullPrice: '$698,000',
    location: '16 Brd Cpt, 15 Av Ca Rd No. 34 St',
    type: 'House',
    badge: 'FOR SALE',
    badgeType: 'sale',
    beds: 4,
    baths: 3,
    area: '2,100',
    image: 'p4.png',
    images: ['p4.png', 'p1.png', 'p3.png'],
    description: 'Exceptional contemporary villa featuring 4 spacious bedrooms and 3 modern bathrooms. The property includes a private pool, manicured gardens, and a double garage. An open-plan design connects the living room, kitchen and dining area for a truly modern family lifestyle.',
    featured: true
  },
  {
    id: 4,
    title: 'Designer Studio Flat',
    price: '$310',
    fullPrice: '$310,000',
    location: 'Park Avenue District, No. 55',
    type: 'Studio',
    badge: 'FOR RENT',
    badgeType: '',
    beds: 1,
    baths: 1,
    area: '540',
    image: 'p3.png',
    images: ['p3.png', 'p2.png', 'p1.png'],
    description: 'A chic and efficiently designed studio flat in a prime neighbourhood. Perfect for young professionals or couples, this property offers high-end finishes, a compact but clever kitchen layout and stunning views of the park.',
    featured: false
  },
  {
    id: 5,
    title: 'Riverside Townhouse',
    price: '$620',
    fullPrice: '$620,000',
    location: 'River Walk, Elm Street, No. 22',
    type: 'House',
    badge: 'FOR SALE',
    badgeType: 'sale',
    beds: 3,
    baths: 2,
    area: '1,650',
    image: 'p4.png',
    images: ['p4.png', 'p3.png', 'p2.png'],
    description: 'Elegant riverside townhouse with three generous bedrooms and a private garden. Thoughtfully renovated interiors showcase high ceilings, hardwood floors, and a gourmet kitchen. Located steps from the riverside promenade.',
    featured: false
  },
  {
    id: 6,
    title: 'Executive Apartment',
    price: '$445',
    fullPrice: '$445,000',
    location: 'Midtown Heights, Tower B, No. 901',
    type: 'Apartment',
    badge: 'FOR RENT',
    badgeType: '',
    beds: 2,
    baths: 2,
    area: '1,050',
    image: 'p1.png',
    images: ['p1.png', 'p4.png', 'p2.png'],
    description: 'Sophisticated executive apartment in a landmark highrise. Features premium finishes throughout, a gourmet kitchen, spa-inspired bathrooms and a private balcony with sweeping skyline views. Residents enjoy access to a rooftop pool, concierge and fitness centre.',
    featured: true
  }
];

function saveData() {
  localStorage.setItem('gr_properties', JSON.stringify(properties));
}

// ===== DISPLAY CARDS =====
function displayProperties(data) {
  const container = document.getElementById('property-list');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:120px 0;color:var(--classic-muted);">
        <i class="fa-solid fa-house-circle-xmark" style="font-size:48px;margin-bottom:24px;display:block;color:var(--classic-border);"></i>
        <p style="font-family:'Playfair Display',serif;font-size:24px;font-style:italic;">No properties found at this time.</p>
      </div>`;
    return;
  }

  container.innerHTML = data.map(p => `
    <div class="property-card" onclick="goDetail(${p.id})">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy"/>
        <span class="card-badge ${p.badgeType}">${p.badge}</span>
        <button class="card-fav ${isFav(p.id) ? 'active' : ''}" onclick="toggleFav(event,${p.id})" id="fav-${p.id}" title="Save">
          <i class="fa-${isFav(p.id) ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${p.price}<span>/month</span></div>
        <div class="card-title">${p.title}</div>
        <div class="card-location"><i class="fa-solid fa-location-dot"></i>${p.location}</div>
        <div class="card-meta">
          <div class="meta-item"><i class="fa-solid fa-bed"></i>${p.beds} Beds</div>
          <div class="meta-item"><i class="fa-solid fa-bath"></i>${p.baths} Baths</div>
          <div class="meta-item"><i class="fa-solid fa-ruler-combined"></i>${p.area} ft²</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== NAVIGATE TO DETAIL =====
function goDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// ===== FAVOURITES =====
let favs = JSON.parse(localStorage.getItem('gr_favs')) || [];

function isFav(id) { return favs.includes(id); }

function toggleFav(e, id) {
  e.stopPropagation();
  if (isFav(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem('gr_favs', JSON.stringify(favs));
  const btn = document.getElementById(`fav-${id}`);
  if (btn) {
    btn.innerHTML = `<i class="fa-${isFav(id) ? 'solid' : 'regular'} fa-heart"></i>`;
    btn.classList.toggle('active', isFav(id));
  }
  showToast(isFav(id) ? 'Saved to favourites' : 'Removed from favourites');
}

// ===== TOAST =====
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== ADD PROPERTY =====
function addProperty() {
  const title = document.getElementById('title').value.trim();
  const price = document.getElementById('price').value.trim();
  const location = document.getElementById('location').value.trim();
  const beds = document.getElementById('beds').value;
  const baths = document.getElementById('baths').value;
  const area = document.getElementById('area').value;
  const type = document.getElementById('type').value;
  const badge = document.getElementById('badge').value;
  const description = document.getElementById('description').value.trim();
  const image = document.getElementById('image').value.trim() || 'p1.png';

  if (!title || !price || !location) {
    showToast('Please fill in all required fields');
    return;
  }

  const newProp = {
    id: Date.now(),
    title, price: '$' + price, fullPrice: '$' + price + ',000',
    location, beds: parseInt(beds), baths: parseInt(baths),
    area, type, badge, badgeType: badge === 'FOR SALE' ? 'sale' : '',
    description, image, images: [image],
    featured: false
  };

  properties.push(newProp);
  saveData();
  showToast('Property added!');
  setTimeout(() => window.location.href = 'index.html', 1200);
}

// ===== DETAIL PAGE =====
function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const p = properties.find(x => x.id === id);
  if (!p) { document.getElementById('detail-root').innerHTML = '<div style="padding:160px 40px;text-align:center;"><p style="font-family:\'Playfair Display\',serif;font-size:24px;color:var(--classic-muted);">Property not found.</p><a href="index.html" style="display:inline-block;margin-top:24px;color:var(--classic-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;font-size:11px;">Back to listings</a></div>'; return; }

  const imgs = p.images && p.images.length >= 3 ? p.images : [p.image, p.image, p.image];
  document.title = `${p.title} – Grandview Realty`;

  document.getElementById('detail-root').innerHTML = `
    <div class="detail-wrapper">
      <div class="detail-header-nav">
        <a href="index.html" class="detail-back"><i class="fa-solid fa-arrow-left"></i> Back to listings</a>
        <div class="detail-header-actions">
           <button class="action-btn" onclick="toggleFav(event,${p.id})">
              <i class="fa-${isFav(p.id) ? 'solid' : 'regular'} fa-heart"></i> ${isFav(p.id) ? 'Saved' : 'Save'}
            </button>
            <button class="action-btn"><i class="fa-solid fa-share-nodes"></i> Share</button>
        </div>
      </div>

      <div class="detail-images">
        <div class="detail-img-main"><img src="${imgs[0]}" alt="${p.title}"/></div>
        <div class="detail-img-sm"><img src="${imgs[1]}" alt="${p.title}"/></div>
        <div class="detail-img-sm"><img src="${imgs[2]}" alt="${p.title}"/></div>
      </div>

      <div class="detail-body">
        <div class="detail-info">
          <div class="detail-tags">
            <span class="tag black">${p.badge}</span>
            <span class="tag">${p.type}</span>
          </div>
          <h1>${p.title}</h1>
          <div class="detail-address"><i class="fa-solid fa-location-dot"></i>${p.location}</div>

          <div class="detail-specs">
            <div class="spec-item"><span class="spec-val">${p.beds}</span><span class="spec-lbl">Bedrooms</span></div>
            <div class="spec-item"><span class="spec-val">${p.baths}</span><span class="spec-lbl">Bathrooms</span></div>
            <div class="spec-item"><span class="spec-val">${p.area}</span><span class="spec-lbl">Square Ft</span></div>
            <div class="spec-item"><span class="spec-val">${p.type}</span><span class="spec-lbl">Type</span></div>
          </div>

          <div class="detail-section">
            <h3>About this property</h3>
            <p class="detail-desc">${p.description}</p>
          </div>

          <div class="detail-section">
            <h3>Key Amenities</h3>
            <ul class="amenities-list">
              <li><i class="fa-solid fa-check"></i> High Ceilings</li>
              <li><i class="fa-solid fa-check"></i> Smart Home Security</li>
              <li><i class="fa-solid fa-check"></i> Designer Kitchen</li>
              <li><i class="fa-solid fa-check"></i> Private Balcony</li>
              <li><i class="fa-solid fa-check"></i> Floor-to-ceiling Windows</li>
              <li><i class="fa-solid fa-check"></i> Underfloor Heating</li>
            </ul>
          </div>
        </div>

        <div class="contact-sidebar">
          <div class="contact-card-premium">
            <div class="price-big">${p.price}<span style="font-size:16px;color:var(--classic-muted);font-weight:400;font-family:'Lora',serif;">/month</span></div>
            <div class="price-sub">Schedule a private viewing or make an enquiry</div>
            
            <div class="premium-form">
              <div class="form-group-premium">
                <input type="text" placeholder="Full Name" id="cf-name"/>
              </div>
              <div class="form-group-premium">
                <input type="email" placeholder="Email Address" id="cf-email"/>
              </div>
              <div class="form-group-premium">
                <textarea placeholder="Message" id="cf-msg"></textarea>
              </div>
              <button class="btn-classic" onclick="submitEnquiry()">Request Viewing</button>
              <button class="btn-classic-outline"><i class="fa-solid fa-phone"></i> Call Agent</button>
            </div>
          </div>

          <div class="agent-compact">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" alt="Sarah Mitchell"/>
            <div class="agent-compact-info">
              <p class="agent-label">Managed by</p>
              <p class="agent-name">Sarah Mitchell</p>
              <p class="agent-exp">Senior Property Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function submitEnquiry() {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  if (!name || !email) { showToast('Please enter your name and email'); return; }
  showToast('Enquiry sent! We will contact you shortly.');
  ['cf-name','cf-email','cf-phone','cf-msg'].forEach(id => { document.getElementById(id).value = ''; });
}

// ===== FILTER (hero search) =====
function filterHero(val) {
  if (!val) { displayProperties(properties); return; }
  const v = val.toLowerCase();
  displayProperties(properties.filter(p =>
    p.location.toLowerCase().includes(v) ||
    p.title.toLowerCase().includes(v) ||
    p.type.toLowerCase().includes(v)
  ));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('property-list')) {
    displayProperties(properties);
  }
  if (document.getElementById('detail-root')) {
    renderDetail();
  }
});
