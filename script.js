const products = [
  {
    id: 1,
    name: "Nakshi Wall Art",
    price: "৳3,500",
    artist: "Farzana Akter",
    location: "Rajshahi, Bangladesh",
    story: "A handcrafted decorative wall piece inspired by Nakshi patterns and rural storytelling.",
    image: "images/product-1.jpg",
    overlay: "images/product-1.png",
    mode: "wall"
  },
  {
    id: 2,
    name: "Wooden Accent Chair",
    price: "৳8,900",
    artist: "Rakib Hossain",
    location: "Sylhet, Bangladesh",
    story: "A hand-carved wooden chair designed for compact modern interiors with local craftsmanship.",
    image: "images/product-2.jpg",
    overlay: "images/product-2.png",
    mode: "floor"
  },
  {
    id: 3,
    name: "Folk Canvas Painting",
    price: "৳4,200",
    artist: "Mehjabin Noor",
    location: "Dhaka, Bangladesh",
    story: "A contemporary folk art canvas using vibrant color, movement, and traditional visual rhythm.",
    image: "images/product-3.jpg",
    overlay: "images/product-3.png",
    mode: "wall"
  }
];

const productGrid = document.getElementById("productGrid");

const cameraModal = document.getElementById("cameraModal");
const cameraPreview = document.getElementById("cameraPreview");
const backBtn = document.getElementById("backBtn");
const pinBtn = document.getElementById("pinBtn");
const wallModeBtn = document.getElementById("wallModeBtn");
const floorModeBtn = document.getElementById("floorModeBtn");
const resetBtn = document.getElementById("resetBtn");
const shotBtn = document.getElementById("shotBtn");

const cameraProductTitle = document.getElementById("cameraProductTitle");
const cameraArtist = document.getElementById("cameraArtist");
const cameraStatus = document.getElementById("cameraStatus");

const overlayWrapper = document.getElementById("overlayWrapper");
const overlayShadow = document.getElementById("overlayShadow");
const overlayFrame = document.getElementById("overlayFrame");
const productOverlay = document.getElementById("productOverlay");

const captureCanvas = document.getElementById("captureCanvas");
const shotPreview = document.getElementById("shotPreview");
const capturedImage = document.getElementById("capturedImage");
const downloadShot = document.getElementById("downloadShot");
const closeShot = document.getElementById("closeShot");

let cameraStream = null;
let selectedProduct = products[0];
let currentMode = "wall";

let overlayState = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: -2,
  opacity: 1
};

let isPinned = false;
let isDragging = false;
let longPressTimer = null;

let startTouches = [];
let gestureStart = null;
let dragStart = null;

let orientationEnabled = false;
let baseBeta = null;
let baseGamma = null;

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-content">
        <h3>${product.name}</h3>
        <p class="product-meta">Artist: ${product.artist}</p>
        <p class="product-meta">${product.location}</p>
        <p class="product-price">${product.price}</p>
        <button class="try-btn" data-index="${index}">Try in My Room</button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  document.querySelectorAll(".try-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const index = Number(btn.dataset.index);
      selectedProduct = products[index];
      loadSelectedProduct();
      await openCameraFullscreen();
    });
  });
}

function loadSelectedProduct() {
  cameraProductTitle.textContent = selectedProduct.name;
  cameraArtist.textContent = `Artist: ${selectedProduct.artist}`;
  productOverlay.src = selectedProduct.overlay;
  currentMode = selectedProduct.mode;
  applyMode();
  resetOverlay();
}

function applyMode() {
  overlayWrapper.classList.remove("wall-mode", "floor-mode");
  overlayWrapper.classList.add(`${currentMode}-mode`);

  if (currentMode === "wall") {
    overlayWrapper.style.top = "38%";
    overlayState.rotation = -2;
    cameraStatus.textContent = "One finger drag • Two fingers zoom/rotate • Long press to pin on wall";
  } else {
    overlayWrapper.style.top = "72%";
    overlayState.rotation = 0;
    cameraStatus.textContent = "One finger drag • Two fingers zoom/rotate • Long press to pin on floor";
  }

  applyOverlayTransform();
}

function resetOverlay() {
  isPinned = false;
  pinBtn.textContent = "Pin";
  overlayWrapper.classList.remove("pinned");

  overlayState.x = 0;
  overlayState.y = 0;
  overlayState.scale = 1;
  overlayState.rotation = currentMode === "wall" ? -2 : 0;
  overlayState.opacity = 1;

  baseBeta = null;
  baseGamma = null;

  applyOverlayTransform();
}

function applyOverlayTransform(extraTiltX = 0, extraTiltY = 0) {
  const finalRotate = overlayState.rotation + extraTiltY;
  const tiltX = extraTiltX;
  const tiltY = extraTiltY * 0.4;

  overlayWrapper.style.transform =
    `translate(-50%, -50%) translate(${overlayState.x}px, ${overlayState.y}px) ` +
    `scale(${overlayState.scale}) rotate(${finalRotate}deg) ` +
    `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
}

async function openCameraFullscreen() {
  cameraModal.classList.add("show");
  document.body.style.overflow = "hidden";

  try {
    if (cameraStream) stopCamera();

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    cameraPreview.srcObject = cameraStream;
    cameraStatus.textContent = currentMode === "wall"
      ? "Camera on • Move product, then long press to pin on wall"
      : "Camera on • Move product, then long press to pin on floor";

    await enableOrientationIfPossible();
  } catch (error) {
    console.error(error);
    cameraStatus.textContent = "Camera access failed. Use HTTPS or localhost and allow permission.";
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  cameraPreview.srcObject = null;
  cameraModal.classList.remove("show");
  document.body.style.overflow = "";
}

async function enableOrientationIfPossible() {
  try {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      const result = await DeviceOrientationEvent.requestPermission();
      orientationEnabled = result === "granted";
    } else {
      orientationEnabled = true;
    }
  } catch (e) {
    orientationEnabled = false;
  }
}

function getDistance(t1, t2) {
  return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
}

function getAngle(t1, t2) {
  return Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX) * 180 / Math.PI;
}

function startLongPress() {
  clearLongPress();
  longPressTimer = setTimeout(() => {
    isPinned = true;
    pinBtn.textContent = "Unpin";
    overlayWrapper.classList.add("pinned");
    cameraStatus.textContent = "Pinned. Now the object is locked. Move phone to see slight tilt effect.";
  }, 550);
}

function clearLongPress() {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
}

overlayWrapper.addEventListener("touchstart", (e) => {
  if (isPinned) return;

  if (e.touches.length === 1) {
    const t = e.touches[0];
    dragStart = {
      x: t.clientX,
      y: t.clientY,
      initialX: overlayState.x,
      initialY: overlayState.y
    };
    isDragging = true;
    startLongPress();
  }

  if (e.touches.length === 2) {
    clearLongPress();
    const [t1, t2] = e.touches;
    gestureStart = {
      distance: getDistance(t1, t2),
      angle: getAngle(t1, t2),
      scale: overlayState.scale,
      rotation: overlayState.rotation
    };
  }
}, { passive: true });

window.addEventListener("touchmove", (e) => {
  if (!cameraModal.classList.contains("show")) return;

  if (isPinned) return;

  if (e.touches.length === 1 && isDragging && dragStart) {
    const t = e.touches[0];
    const dx = t.clientX - dragStart.x;
    const dy = t.clientY - dragStart.y;

    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      clearLongPress();
    }

    overlayState.x = dragStart.initialX + dx;
    overlayState.y = dragStart.initialY + dy;
    applyOverlayTransform();
  }

  if (e.touches.length === 2 && gestureStart) {
    clearLongPress();
    const [t1, t2] = e.touches;

    const newDistance = getDistance(t1, t2);
    const newAngle = getAngle(t1, t2);

    const scaleFactor = newDistance / gestureStart.distance;
    overlayState.scale = Math.max(0.2, Math.min(4, gestureStart.scale * scaleFactor));
    overlayState.rotation = gestureStart.rotation + (newAngle - gestureStart.angle);

    applyOverlayTransform();
  }
}, { passive: true });

window.addEventListener("touchend", () => {
  isDragging = false;
  dragStart = null;
  gestureStart = null;
  clearLongPress();
});

overlayWrapper.addEventListener("mousedown", (e) => {
  if (isPinned) return;
  e.preventDefault();
  dragStart = {
    x: e.clientX,
    y: e.clientY,
    initialX: overlayState.x,
    initialY: overlayState.y
  };
  isDragging = true;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging || !dragStart || isPinned) return;
  const dx = e.clientX - dragStart.x;
  const dy = e.clientY - dragStart.y;
  overlayState.x = dragStart.initialX + dx;
  overlayState.y = dragStart.initialY + dy;
  applyOverlayTransform();
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  dragStart = null;
});

pinBtn.addEventListener("click", () => {
  isPinned = !isPinned;
  pinBtn.textContent = isPinned ? "Unpin" : "Pin";
  overlayWrapper.classList.toggle("pinned", isPinned);

  if (isPinned) {
    cameraStatus.textContent = "Pinned. Move phone to see slight tilt effect.";
  } else {
    baseBeta = null;
    baseGamma = null;
    cameraStatus.textContent = "Unpinned. You can move, zoom, and rotate again.";
    applyOverlayTransform();
  }
});

wallModeBtn.addEventListener("click", () => {
  currentMode = "wall";
  applyMode();
  resetOverlay();
});

floorModeBtn.addEventListener("click", () => {
  currentMode = "floor";
  applyMode();
  resetOverlay();
});

resetBtn.addEventListener("click", () => {
  resetOverlay();
  cameraStatus.textContent = "Reset done.";
});

backBtn.addEventListener("click", () => {
  stopCamera();
});

window.addEventListener("deviceorientation", (event) => {
  if (!cameraModal.classList.contains("show")) return;
  if (!isPinned) return;
  if (!orientationEnabled) return;
  if (event.beta == null || event.gamma == null) return;

  if (baseBeta === null) baseBeta = event.beta;
  if (baseGamma === null) baseGamma = event.gamma;

  const deltaBeta = Math.max(-12, Math.min(12, (event.beta - baseBeta) * 0.15));
  const deltaGamma = Math.max(-12, Math.min(12, (event.gamma - baseGamma) * 0.15));

  applyOverlayTransform(-deltaBeta, deltaGamma);
});

shotBtn.addEventListener("click", () => {
  if (!cameraPreview.videoWidth || !cameraPreview.videoHeight) {
    cameraStatus.textContent = "Camera not ready.";
    return;
  }

  const canvas = captureCanvas;
  const ctx = canvas.getContext("2d");

  canvas.width = cameraPreview.videoWidth;
  canvas.height = cameraPreview.videoHeight;

  ctx.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

  const stageRect = cameraModal.getBoundingClientRect();
  const overlayRect = overlayWrapper.getBoundingClientRect();

  const x = ((overlayRect.left - stageRect.left) / stageRect.width) * canvas.width;
  const y = ((overlayRect.top - stageRect.top) / stageRect.height) * canvas.height;
  const w = (overlayRect.width / stageRect.width) * canvas.width;
  const h = (overlayRect.height / stageRect.height) * canvas.height;

  if (currentMode === "floor") {
    const shadowX = x + w * 0.12;
    const shadowY = y + h * 0.84;
    const shadowW = w * 0.75;
    const shadowH = h * 0.10;

    ctx.save();
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "#000";
    ctx.filter = "blur(10px)";
    ctx.beginPath();
    ctx.ellipse(
      shadowX + shadowW / 2,
      shadowY + shadowH / 2,
      shadowW / 2,
      shadowH / 2,
      0,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.restore();
  }

  const tempImg = new Image();
  tempImg.onload = () => {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate((overlayState.rotation * Math.PI) / 180);

    if (currentMode === "wall") {
      const framePadding = w * 0.08;
      ctx.fillStyle = "#6f4a2d";
      ctx.fillRect(
        -w / 2 - framePadding,
        -h / 2 - framePadding,
        w + framePadding * 2,
        h + framePadding * 2
      );
    }

    ctx.drawImage(tempImg, -w / 2, -h / 2, w, h);
    ctx.restore();

    const dataURL = canvas.toDataURL("image/png");
    capturedImage.src = dataURL;
    downloadShot.href = dataURL;
    shotPreview.classList.add("show");
  };
  tempImg.src = productOverlay.src;
});

closeShot.addEventListener("click", () => {
  shotPreview.classList.remove("show");
});

renderProducts();
loadSelectedProduct();