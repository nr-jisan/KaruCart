const artists = [
  {
    id: "farzana-akter",
    name: "Farzana Akter",
    region: "Rajshahi, Bangladesh",
    craft: "Nakshi-inspired wall decor",
    bio: "Farzana blends traditional stitch-inspired patterns with modern wall aesthetics, creating handcrafted pieces rooted in rural visual language.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    story: "Her work is inspired by village embroidery, family memory, and decorative storytelling traditions.",
  },
  {
    id: "rakib-hossain",
    name: "Rakib Hossain",
    region: "Sylhet, Bangladesh",
    craft: "Hand-carved wooden furniture",
    bio: "Rakib works with inherited woodcraft techniques and adapts them for contemporary homes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    story: "He learned woodworking from his father and now creates compact statement furniture.",
  },
  {
    id: "mehjabin-noor",
    name: "Mehjabin Noor",
    region: "Dhaka, Bangladesh",
    craft: "Folk painting & visual storytelling",
    bio: "Mehjabin paints vibrant folk-inspired compositions that preserve memory, rhythm, and culture.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    story: "Her paintings reinterpret the emotional color and rhythm of folk life through a modern lens.",
  },
];

const products = [
  {
    id: 1,
    name: "Nakshi Wall Frame",
    category: "Wall Decor",
    artistId: "farzana-akter",
    price: 3500,
    size: "24 x 18 in",
    material: "Fabric, wood, mixed media",
    stock: 4,
    badge: "Certificate Included",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/picture_frame_PNG90.png",
    story: "Inspired by Nakshi motifs and household memory, this frame turns embroidery-inspired geometry into a warm decorative statement piece.",
    makingVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    certificateCode: "KC-NWF-24091",
  },
  {
    id: 2,
    name: "Hand-Carved Accent Chair",
    category: "Furniture",
    artistId: "rakib-hossain",
    price: 8900,
    size: "Single Seater",
    material: "Solid wood, hand polish",
    stock: 2,
    badge: "Try In Your Room",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/chair_PNG6881.png",
    story: "A compact, heritage-inspired accent chair shaped by hand-carving traditions and updated for stylish modern interiors.",
    makingVideo: "https://www.w3schools.com/html/movie.mp4",
    certificateCode: "KC-HAC-24092",
  },
  {
    id: 3,
    name: "Folk Canvas Painting",
    category: "Painting",
    artistId: "mehjabin-noor",
    price: 4200,
    size: "20 x 20 in",
    material: "Acrylic on canvas",
    stock: 6,
    badge: "Artist Story",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/picture_frame_PNG90.png",
    story: "This composition translates folk rhythm, movement, and emotional color into a decorative artwork meant to carry cultural energy.",
    makingVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    certificateCode: "KC-FCP-24093",
  },
  {
    id: 4,
    name: "Clay Heritage Vase",
    category: "Decor",
    artistId: "farzana-akter",
    price: 2700,
    size: "Medium",
    material: "Hand-shaped clay",
    stock: 5,
    badge: "Limited Craft",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/vase_PNG44.png",
    story: "A village-inspired decorative vase with organic texture, earthy tone, and handcrafted imperfections that make each piece unique.",
    makingVideo: "https://www.w3schools.com/html/movie.mp4",
    certificateCode: "KC-CHV-24094",
  },
  {
    id: 5,
    name: "Woven Table Accent",
    category: "Handcrafted Decor",
    artistId: "rakib-hossain",
    price: 1900,
    size: "Small",
    material: "Jute and wood",
    stock: 8,
    badge: "New Arrival",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/vase_PNG44.png",
    story: "An accent piece designed to celebrate natural texture and handmade warmth in compact spaces.",
    makingVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    certificateCode: "KC-WTA-24095",
  },
  {
    id: 6,
    name: "Heritage Wall Mirror",
    category: "Wall Decor",
    artistId: "mehjabin-noor",
    price: 5100,
    size: "30 x 20 in",
    material: "Wood and mirror",
    stock: 3,
    badge: "Premium Pick",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80"
    ],
    overlay: "https://pngimg.com/d/picture_frame_PNG90.png",
    story: "A decorative wall mirror framed with heritage-inspired craft details for warm, elegant spaces.",
    makingVideo: "https://www.w3schools.com/html/movie.mp4",
    certificateCode: "KC-HWM-24096",
  },
];

const categories = ["All", "Wall Decor", "Furniture", "Painting", "Decor", "Handcrafted Decor"];

let selectedCategory = "All";
let searchText = "";
let cart = [];
let selectedProduct = null;
let selectedArtist = null;

/* Room preview state */
let roomStream = null;
let roomPinned = false;
let roomMode = "wall";
let roomState = { x: 0, y: 0, scale: 1, rotation: -2 };
let roomGesture = null;
let roomLongPress = null;
let baseBeta = null;
let baseGamma = null;

const productGrid = document.getElementById("productGrid");
const artistGrid = document.getElementById("artistGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");

function formatPrice(value) {
  return `৳ ${value.toLocaleString()}`;
}

function getArtistById(id) {
  return artists.find(a => a.id === id);
}

function renderCategories() {
  categoryFilters.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `filter-btn ${selectedCategory === cat ? "active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      selectedCategory = cat;
      renderCategories();
      renderProducts();
    };
    categoryFilters.appendChild(btn);
  });
}

function renderProducts() {
  const filtered = products.filter(product => {
    const artist = getArtistById(product.artistId);
    const matchesSearch =
      [product.name, product.category, artist.name, artist.region]
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase());

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  productGrid.innerHTML = "";

  filtered.forEach(product => {
    const artist = getArtistById(product.artistId);

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-card-body">
        <div class="product-top">
          <div>
            <span class="badge">${product.badge}</span>
            <h3 style="margin-top:12px;">${product.name}</h3>
            <p class="artist-name">by ${artist.name}</p>
          </div>
          <span class="region-pill">${artist.region.split(",")[0]}</span>
        </div>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-actions">
          <button class="primary-btn" data-product="${product.id}" data-action="details">View Details</button>
          <button class="secondary-btn" data-product="${product.id}" data-action="room">Try Room</button>
        </div>
        <button class="try-btn" data-product="${product.id}" data-action="cart">Add to Cart</button>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function renderArtists() {
  artistGrid.innerHTML = "";

  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "artist-card";
    card.innerHTML = `
      <img src="${artist.image}" alt="${artist.name}">
      <div class="artist-card-body">
        <h3>${artist.name}</h3>
        <p class="artist-region">${artist.region}</p>
        <p class="artist-craft">${artist.craft}</p>
        <p class="artist-bio">${artist.bio}</p>
        <button class="primary-btn artist-btn" data-artist="${artist.id}">View Profile</button>
      </div>
    `;
    artistGrid.appendChild(card);
  });
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function openProductModal(product) {
  selectedProduct = product;
  const artist = getArtistById(product.artistId);

  document.getElementById("productBadge").textContent = product.badge;
  document.getElementById("productTitle").textContent = product.name;
  document.getElementById("productArtistLine").textContent = `${artist.name} • ${artist.region}`;
  document.getElementById("productPrice").textContent = formatPrice(product.price);
  document.getElementById("productStory").textContent = product.story;
  document.getElementById("productSize").textContent = product.size;
  document.getElementById("productMaterial").textContent = product.material;
  document.getElementById("productStock").textContent = `${product.stock} available`;
  document.getElementById("productCode").textContent = product.certificateCode;

  const mainImage = document.getElementById("productMainImage");
  mainImage.src = product.gallery[0];
  mainImage.alt = product.name;

  const thumbs = document.getElementById("productThumbs");
  thumbs.innerHTML = "";
  product.gallery.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = product.name;
    if (index === 0) thumb.classList.add("active");
    thumb.onclick = () => {
      mainImage.src = img;
      thumbs.querySelectorAll("img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    };
    thumbs.appendChild(thumb);
  });

  openModal("productModal");
}

function openArtistModal(artist) {
  selectedArtist = artist;
  document.getElementById("artistImage").src = artist.image;
  document.getElementById("artistName").textContent = artist.name;
  document.getElementById("artistRegion").textContent = artist.region;
  document.getElementById("artistCraft").textContent = artist.craft;
  document.getElementById("artistBio").textContent = artist.bio + " " + artist.story;

  const related = products.filter(p => p.artistId === artist.id);
  const wrap = document.getElementById("artistProducts");
  wrap.innerHTML = "";

  related.forEach(product => {
    const el = document.createElement("div");
    el.className = "connected-card";
    el.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h4>${product.name}</h4>
        <p>${formatPrice(product.price)}</p>
      </div>
    `;
    el.onclick = () => {
      closeModal("artistModal");
      openProductModal(product);
    };
    wrap.appendChild(el);
  });

  openModal("artistModal");
}

function openCertificate(product) {
  const artist = getArtistById(product.artistId);
  document.getElementById("certProductName").textContent = product.name;
  document.getElementById("certArtist").textContent = artist.name;
  document.getElementById("certRegion").textContent = artist.region;
  document.getElementById("certMaterial").textContent = product.material;
  document.getElementById("certCode").textContent = product.certificateCode;
  openModal("certificateModal");
}

function openVideo(product) {
  document.getElementById("videoTitle").textContent = `How ${product.name} Was Made`;
  const video = document.getElementById("makingVideo");
  video.src = product.makingVideo;
  openModal("videoModal");
}

function addToCart(product) {
  const found = cart.find(item => item.id === product.id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
  renderCart();
  openModal("cartDrawer");
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartCount").style.display = count > 0 ? "inline-block" : "inline-block";
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-summary"><p style="color:#6b5748;">Your cart is empty.</p></div>`;
  } else {
    cart.forEach(item => {
      const el = document.createElement("div");
      el.className = "cart-item";
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1;">
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)}</p>
          <div class="cart-controls">
            <button class="qty-btn" data-cart="${item.id}" data-type="minus">−</button>
            <strong>${item.qty}</strong>
            <button class="qty-btn" data-cart="${item.id}" data-type="plus">+</button>
            <button class="remove-link" data-cart="${item.id}" data-type="remove">Remove</button>
          </div>
        </div>
      `;
      cartItems.appendChild(el);
    });
  }

  document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
  document.getElementById("cartTotal").textContent = formatPrice(subtotal);

  const checkoutItems = document.getElementById("checkoutItems");
  checkoutItems.innerHTML = "";
  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "summary-row";
    row.innerHTML = `<span>${item.name} × ${item.qty}</span><strong>${formatPrice(item.price * item.qty)}</strong>`;
    checkoutItems.appendChild(row);
  });
  document.getElementById("checkoutTotal").textContent = formatPrice(subtotal);
}

/* Room Preview */
const roomPreview = document.getElementById("roomPreview");
const roomVideo = document.getElementById("roomVideo");
const roomObject = document.getElementById("roomObject");
const roomObjectImage = document.getElementById("roomObjectImage");
const roomHint = document.getElementById("roomHint");
const roomProductTitle = document.getElementById("roomProductTitle");
const roomArtistTitle = document.getElementById("roomArtistTitle");
const roomPinBtn = document.getElementById("roomPinBtn");
const roomWallBtn = document.getElementById("roomWallBtn");
const roomFloorBtn = document.getElementById("roomFloorBtn");

async function openRoomPreview(product) {
  selectedProduct = product;
  const artist = getArtistById(product.artistId);

  roomProductTitle.textContent = product.name;
  roomArtistTitle.textContent = artist.name;
  roomObjectImage.src = product.overlay;

  roomMode = product.category === "Furniture" ? "floor" : "wall";
  applyRoomMode();
  resetRoomObject();

  roomPreview.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  try {
    if (roomStream) stopRoomPreview();

    roomStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    roomVideo.srcObject = roomStream;

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        await DeviceOrientationEvent.requestPermission();
      } catch (e) {}
    }
  } catch (e) {
    roomHint.textContent = "Camera failed. Use localhost or HTTPS and allow permission.";
  }
}

function stopRoomPreview() {
  if (roomStream) {
    roomStream.getTracks().forEach(track => track.stop());
    roomStream = null;
  }
  roomVideo.srcObject = null;
  roomPreview.classList.add("hidden");
  document.body.style.overflow = "";
}

function applyRoomMode() {
  roomObject.classList.remove("wall-mode", "floor-mode");
  roomObject.classList.add(`${roomMode}-mode`);

  roomWallBtn.classList.toggle("active", roomMode === "wall");
  roomFloorBtn.classList.toggle("active", roomMode === "floor");

  roomState.rotation = roomMode === "wall" ? -2 : 0;
  roomHint.textContent = "One finger drag • Two fingers zoom/rotate • Long press to pin";
}

function resetRoomObject() {
  roomPinned = false;
  roomPinBtn.textContent = "Pin";
  roomObject.classList.remove("pinned");
  roomState = {
    x: 0,
    y: 0,
    scale: 1,
    rotation: roomMode === "wall" ? -2 : 0
  };
  baseBeta = null;
  baseGamma = null;
  updateRoomTransform();
}

function updateRoomTransform(tiltX = 0, tiltY = 0) {
  const finalRotation = roomState.rotation + tiltY;
  roomObject.style.transform =
    `translate(-50%, -50%) translate(${roomState.x}px, ${roomState.y}px) scale(${roomState.scale}) rotate(${finalRotation}deg) perspective(900px) rotateX(${-tiltX}deg) rotateY(${tiltY * 0.4}deg)`;
}

function getDistance(t1, t2) {
  return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
}

function getAngle(t1, t2) {
  return Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX) * 180 / Math.PI;
}

function clearRoomLongPress() {
  if (roomLongPress) {
    clearTimeout(roomLongPress);
    roomLongPress = null;
  }
}

roomObject.addEventListener("touchstart", (e) => {
  if (roomPinned) return;

  if (e.touches.length === 1) {
    const t = e.touches[0];
    roomGesture = {
      type: "drag",
      startX: t.clientX,
      startY: t.clientY,
      initialX: roomState.x,
      initialY: roomState.y
    };

    roomLongPress = setTimeout(() => {
      roomPinned = true;
      roomPinBtn.textContent = "Unpin";
      roomHint.textContent = "Pinned. Move phone to see slight tilt effect.";
    }, 550);
  }

  if (e.touches.length === 2) {
    clearRoomLongPress();
    const [t1, t2] = e.touches;
    roomGesture = {
      type: "pinch",
      distance: getDistance(t1, t2),
      angle: getAngle(t1, t2),
      initialScale: roomState.scale,
      initialRotation: roomState.rotation
    };
  }
}, { passive: true });

window.addEventListener("touchmove", (e) => {
  if (roomPreview.classList.contains("hidden")) return;
  if (!roomGesture || roomPinned) return;

  if (roomGesture.type === "drag" && e.touches.length === 1) {
    const t = e.touches[0];
    const dx = t.clientX - roomGesture.startX;
    const dy = t.clientY - roomGesture.startY;

    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) clearRoomLongPress();

    roomState.x = roomGesture.initialX + dx;
    roomState.y = roomGesture.initialY + dy;
    updateRoomTransform();
  }

  if (roomGesture.type === "pinch" && e.touches.length === 2) {
    clearRoomLongPress();
    const [t1, t2] = e.touches;
    const scaleFactor = getDistance(t1, t2) / roomGesture.distance;
    const angleDiff = getAngle(t1, t2) - roomGesture.angle;

    roomState.scale = Math.max(0.2, Math.min(4, roomGesture.initialScale * scaleFactor));
    roomState.rotation = roomGesture.initialRotation + angleDiff;
    updateRoomTransform();
  }
}, { passive: true });

window.addEventListener("touchend", () => {
  roomGesture = null;
  clearRoomLongPress();
});

window.addEventListener("deviceorientation", (event) => {
  if (roomPreview.classList.contains("hidden")) return;
  if (!roomPinned) return;
  if (event.beta == null || event.gamma == null) return;

  if (baseBeta === null) baseBeta = event.beta;
  if (baseGamma === null) baseGamma = event.gamma;

  const deltaBeta = Math.max(-12, Math.min(12, (event.beta - baseBeta) * 0.12));
  const deltaGamma = Math.max(-12, Math.min(12, (event.gamma - baseGamma) * 0.12));

  updateRoomTransform(deltaBeta, deltaGamma);
});

/* Events */
document.addEventListener("click", (e) => {
  const productId = e.target.dataset.product;
  const action = e.target.dataset.action;
  const artistId = e.target.dataset.artist;
  const cartId = e.target.dataset.cart;
  const closeId = e.target.dataset.close;

  if (closeId) {
    closeModal(closeId);
    if (closeId === "videoModal") {
      const video = document.getElementById("makingVideo");
      video.pause();
      video.src = "";
    }
    return;
  }

  if (artistId) {
    const artist = artists.find(a => a.id === artistId);
    openArtistModal(artist);
  }

  if (productId && action) {
    const product = products.find(p => p.id === Number(productId));
    if (action === "details") openProductModal(product);
    if (action === "room") openRoomPreview(product);
    if (action === "cart") addToCart(product);
  }

  if (cartId) {
    const item = cart.find(i => i.id === Number(cartId));
    if (!item) return;

    const type = e.target.dataset.type;
    if (type === "plus") item.qty += 1;
    if (type === "minus") item.qty = Math.max(1, item.qty - 1);
    if (type === "remove") cart = cart.filter(i => i.id !== item.id);

    updateCartCount();
    renderCart();
  }
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  searchText = e.target.value;
  renderProducts();
});

document.getElementById("openCartBtn").onclick = () => {
  renderCart();
  openModal("cartDrawer");
};

document.getElementById("browseBtn").onclick = () => {
  document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("artistScrollBtn").onclick = () => {
  document.getElementById("artists").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("homeBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("addToCartFromModal").onclick = () => {
  addToCart(selectedProduct);
};

document.getElementById("tryRoomFromModal").onclick = () => {
  closeModal("productModal");
  openRoomPreview(selectedProduct);
};

document.getElementById("videoFromModal").onclick = () => {
  openVideo(selectedProduct);
};

document.getElementById("certificateFromModal").onclick = () => {
  openCertificate(selectedProduct);
};

document.getElementById("artistFromModal").onclick = () => {
  const artist = getArtistById(selectedProduct.artistId);
  closeModal("productModal");
  openArtistModal(artist);
};

document.getElementById("checkoutBtn").onclick = () => {
  closeModal("cartDrawer");
  renderCart();
  openModal("checkoutModal");
};

document.getElementById("placeOrderBtn").onclick = () => {
  cart = [];
  renderCart();
  updateCartCount();
  closeModal("checkoutModal");
  openModal("successModal");
};

document.getElementById("successBackBtn").onclick = () => {
  closeModal("successModal");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("roomBackBtn").onclick = () => {
  stopRoomPreview();
};

document.getElementById("roomPinBtn").onclick = () => {
  roomPinned = !roomPinned;
  roomPinBtn.textContent = roomPinned ? "Unpin" : "Pin";
  roomHint.textContent = roomPinned
    ? "Pinned. Move phone to see slight tilt effect."
    : "One finger drag • Two fingers zoom/rotate • Long press to pin";
  if (!roomPinned) {
    baseBeta = null;
    baseGamma = null;
    updateRoomTransform();
  }
};

document.getElementById("roomWallBtn").onclick = () => {
  roomMode = "wall";
  applyRoomMode();
  resetRoomObject();
};

document.getElementById("roomFloorBtn").onclick = () => {
  roomMode = "floor";
  applyRoomMode();
  resetRoomObject();
};

document.getElementById("roomResetBtn").onclick = () => {
  resetRoomObject();
};

function init() {
  renderCategories();
  renderProducts();
  renderArtists();
  renderCart();
  updateCartCount();
}

init();