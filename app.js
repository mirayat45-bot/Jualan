// ============================================================================
// APP STATE MANAGEMENT (Simulating Zustand)
// ============================================================================

const appState = {
  theme: 'dark',
  view: 'landing',
  role: 'guest',
  searchQuery: '',
  cart: [],
  wishlist: [],
  isAIChatOpen: false,

  // Actions
  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    updateUI();
  },

  setView(newView) {
    this.view = newView;
    showView(newView);
  },

  setRole(newRole) {
    this.role = newRole;
    updateUI();
  },

  addToCart(productId) {
    if (!this.cart.includes(productId)) {
      this.cart.push(productId);
      updateCartUI();
    }
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(id => id !== productId);
    updateCartUI();
  },

  toggleWishlist(productId) {
    if (this.wishlist.includes(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
    } else {
      this.wishlist.push(productId);
    }
    updateUI();
  }
};

// ============================================================================
// MOCK DATABASE
// ============================================================================

const DB_PRODUCTS = [
  {
    id: 'p1',
    title: 'Fullstack Next.js SaaS Boilerplate (Enterprise)',
    category: 'SaaS Code',
    price: 450000,
    oldPrice: 1500000,
    rating: 5.0,
    sales: 1250,
    isBestseller: true,
    discount: 70,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Boilerplate SaaS paling komprehensif. Next.js 15, Prisma, PostgreSQL, Stripe, Midtrans, & NextAuth siap pakai.',
    features: ['Multi-tenant Architecture', 'Stripe & Midtrans Integration', 'Admin Dashboard Included', 'Lifetime Updates']
  },
  {
    id: 'p2',
    title: 'Auto-Posting N8N Script (Multi-Platform)',
    category: 'Automation',
    price: 159000,
    oldPrice: 450000,
    rating: 4.9,
    sales: 840,
    isTrending: true,
    discount: 64,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Otomatisasi sosmed tanpa batas. Posting ke IG, Twitter, FB, LinkedIn dalam 1 klik.',
    features: ['5+ Platform Support', 'Error Handling & Retry', 'Video Tutorial Setup', 'JSON Blueprint']
  },
  {
    id: 'p3',
    title: 'Mastering ChatGPT Prompts (10k+ Database)',
    category: 'AI Prompt',
    price: 99000,
    oldPrice: 299000,
    rating: 4.8,
    sales: 3200,
    isBestseller: true,
    discount: 66,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    description: 'Database prompt terbesar di Indonesia. Cocok untuk Copywriter, Programmer, dan Marketer.',
    features: ['Notion Database', '10,000+ Categorized Prompts', 'Prompt Engineering Guide', 'Monthly Updates']
  },
  {
    id: 'p4',
    title: 'UI/UX Masterclass E-book (2026 Edition)',
    category: 'E-book',
    price: 75000,
    oldPrice: 199000,
    rating: 4.7,
    sales: 2100,
    isNew: true,
    discount: 62,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    description: 'Pelajari rahasia UI/UX dari senior designer.',
    features: ['300+ Pages PDF', 'Figma Source Files', 'Interview Cheatsheet', 'Certificate of Completion']
  },
  {
    id: 'p5',
    title: 'Build AI SaaS with Python & React',
    category: 'Course',
    price: 299000,
    oldPrice: 899000,
    rating: 5.0,
    sales: 540,
    isNew: true,
    discount: 66,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Video course 20 jam membangun startup AI menggunakan OpenAI API, FastAPI, dan React.js.',
    features: ['20 Hours 4K Video', 'Source Code Full', 'Private Discord Access', '1-on-1 Mentoring']
  }
];

// ============================================================================
// UI FUNCTIONS
// ============================================================================

function renderProductCard(product) {
  const inCart = appState.cart.includes(product.id);
  const isWishlisted = appState.wishlist.includes(product.id);

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
        
        <div class="product-badges">
          ${product.discount ? `<span class="badge-discount">SAVE ${product.discount}%</span>` : ''}
          ${product.isBestseller ? `<span class="badge-bestseller">⚡ BESTSELLER</span>` : ''}
          ${product.isTrending ? `<span class="badge-trending">📈 TRENDING</span>` : ''}
        </div>

        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>

        <div class="product-overlay">
          <span class="quick-preview-btn">Quick Preview</span>
        </div>
      </div>

      <div class="product-content">
        <div class="product-meta">
          <span class="category">${product.category}</span>
          <span class="rating">⭐ ${product.rating}</span>
        </div>

        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-stats">
          <span>💰 ${product.sales.toLocaleString()} Terjual</span>
          <span>💬 ${product.reviews} Ulasan</span>
        </div>

        <div class="product-footer">
          <div class="price-info">
            <div class="old-price">Rp ${product.oldPrice.toLocaleString()}</div>
            <div class="new-price">Rp ${product.price.toLocaleString()}</div>
          </div>
          <button class="add-to-cart ${inCart ? 'active' : ''}" data-product-id="${product.id}">
            ${inCart ? '✓' : '🛒'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProductGrid(products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(p => renderProductCard(p)).join('');

  // Attach event listeners
  document.querySelectorAll('.product-card').forEach(card => {
    const productId = card.dataset.productId;
    const product = DB_PRODUCTS.find(p => p.id === productId);

    card.querySelector('.quick-preview-btn').addEventListener('click', () => {
      showProductModal(product);
    });

    card.querySelector('.add-to-cart').addEventListener('click', () => {
      appState.addToCart(productId);
    });

    card.querySelector('.wishlist-btn').addEventListener('click', () => {
      appState.toggleWishlist(productId);
    });
  });
}

function showProductModal(product) {
  const modal = document.getElementById('product-modal');
  
  // Populate modal
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-category').textContent = product.category;
  document.getElementById('modal-rating').textContent = product.rating;
  document.getElementById('modal-reviews').textContent = product.reviews;
  document.getElementById('modal-sales').textContent = product.sales.toLocaleString();
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-old-price').textContent = `Rp ${product.oldPrice.toLocaleString()}`;
  document.getElementById('modal-new-price').textContent = `Rp ${product.price.toLocaleString()}`;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = product.features
    .map(f => `<li>✓ ${f}</li>`)
    .join('');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Close button
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Buy button
  document.querySelector('.modal-details .btn-primary').addEventListener('click', () => {
    appState.addToCart(product.id);
    modal.classList.add('hidden');
    appState.setView('checkout');
  });
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = appState.cart.length;

  const cartItems = document.getElementById('cart-items');
  const products = appState.cart.map(id => DB_PRODUCTS.find(p => p.id === id));

  cartItems.innerHTML = products
    .map(p => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.title}">
        <div>
          <h4>${p.title}</h4>
          <div class="text-emerald-500">Rp ${p.price.toLocaleString()}</div>
        </div>
        <button class="remove-cart" data-product-id="${p.id}">✕</button>
      </div>
    `)
    .join('');

  // Calculate totals
  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `Rp ${subtotal.toLocaleString()}`;
  document.getElementById('tax').textContent = `Rp ${Math.round(tax).toLocaleString()}`;
  document.getElementById('total').textContent = `Rp ${Math.round(total).toLocaleString()}`;

  // Remove buttons
  document.querySelectorAll('.remove-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.removeFromCart(btn.dataset.productId);
    });
  });
}

function showView(viewName) {
  // Hide all
  document.getElementById('checkout-page').classList.add('hidden');
  document.getElementById('user-dashboard').classList.add('hidden');
  document.getElementById('admin-dashboard').classList.add('hidden');

  // Show selected
  if (viewName === 'checkout') {
    document.getElementById('checkout-page').classList.remove('hidden');
  } else if (viewName === 'dashboard_user') {
    document.getElementById('user-dashboard').classList.remove('hidden');
    renderLibrary();
  } else if (viewName === 'dashboard_admin') {
    document.getElementById('admin-dashboard').classList.remove('hidden');
  }
}

function renderLibrary() {
  const libraryGrid = document.getElementById('library-grid');
  const userProducts = appState.cart.map(id => DB_PRODUCTS.find(p => p.id === id));

  libraryGrid.innerHTML = userProducts
    .map(p => `
      <div class="library-item">
        <img src="${p.image}" alt="${p.title}">
        <div class="library-info">
          <h4>${p.title}</h4>
          <span class="category">${p.category}</span>
        </div>
        <div class="library-actions">
          <button class="btn-download">📥 Download ZIP</button>
          <button class="btn-preview">→</button>
        </div>
      </div>
    `)
    .join('');
}

function updateUI() {
  // Update based on role
  if (appState.role === 'guest') {
    document.getElementById('user-dashboard').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.add('hidden');
  } else if (appState.role === 'admin') {
    document.getElementById('user-dashboard').classList.add('hidden');
  }

  // Update theme
  if (appState.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderProductGrid(DB_PRODUCTS);

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => appState.toggleTheme());

  // Search
  document.getElementById('search').addEventListener('input', (e) => {
    appState.searchQuery = e.target.value.toLowerCase();
    const filtered = DB_PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(appState.searchQuery)
    );
    renderProductGrid(filtered);
  });

  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const category = e.target.dataset.cat;
      const filtered = category === 'Semua'
        ? DB_PRODUCTS
        : DB_PRODUCTS.filter(p => p.category === category);

      renderProductGrid(filtered);
    });
  });

  // Navigation
  document.getElementById('cart-btn').addEventListener('click', () => appState.setView('checkout'));
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (appState.cart.length === 0) alert('Cart kosong!');
    else appState.setView('checkout');
  });

  document.getElementById('login-btn').addEventListener('click', () => {
    appState.setRole('user');
    appState.setView('dashboard_user');
  });

  // Checkout button
  document.querySelector('#checkout-page .btn-primary').addEventListener('click', () => {
    alert('Memanggil Midtrans/Stripe API...');
    appState.setRole('user');
    appState.setView('dashboard_user');
  });

  // Mobile nav
  document.getElementById('nav-home')?.addEventListener('click', () => {
    appState.setView('landing');
  });

  // AI Chat
  document.getElementById('ai-chat-btn').addEventListener('click', () => {
    const chat = document.getElementById('ai-chat');
    chat.classList.toggle('hidden');
  });
});