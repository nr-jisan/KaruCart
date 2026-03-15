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
const productSwitcher = document.getElementById("productSwitcher");

const cameraProductTitle = document.getElementById("cameraProductTitle");
const cameraArtist = document.getElementById("cameraArtist");
const cameraLocation = document.getElementById("cameraLocation");
const cameraStory = document.getElementById("cameraStory");

const startCameraBtn = document.getElementById("startCamera");
const stopCameraBtn = document.getElementById("stopCamera");
const takeShotBtn = document.getElementById("takeShot");

const cameraPreview = document.getElementById("cameraPreview");
const cameraStatus = document.getElementById("cameraStatus");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");
const cameraStage = document.getElementById("cameraStage");

const overlayWrapper = document.getElementById("overlayWrapper");
const productOverlay = document.getElementById("productOverlay");
const overlayShadow = document.getElementById("overlayShadow");
const overlayFrame = document.getElementById("overlayFrame");

const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const rotateLeftBtn = document.getElementById("rotateLeft");
const rotateRightBtn = document.getElementById("rotateRight");
const resetOverlayBtn = document.getElementById("resetOverlay");
const opacityRange = document.getElementById("opacityRange");

const wallModeBtn = document.getElementById("wallMode");
const floorModeBtn = document.getElementById("floorMode");

const captureCanvas = document.getElementById("captureCanvas");
const screenshotBox = document.getElementById("screenshotBox");
const capturedImage = document.getElementById("capturedImage");
const downloadShot = document.getElementById("downloadShot");

let selectedProductIndex = 0;
let cameraStream = null;
let currentMode = "wall";
let isPlaced = false;

let overlayState = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: -2,
  opacity: 1
};

let isDragging = false;
let startX = 0;
let startY = 0;
let initialX = 0;
let initialY = 0;

productOverlay.onload = () => {
  console.log("Overlay image loaded successfully");
};

productOverlay.onerror = () => {
  console.log("Overlay image failed to load");
  cameraStatus.textContent = "Overlay PNG file not found. Check image path/name.";
};

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
        <div class="product-actions">
          <button class="small-btn try-btn" data-try="${index}">Try in My Room</button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });

  document.querySelectorAll("[data-try]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.try);
      selectProduct(index);
      document.getElementById("camera-demo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderProductSwitcher() {
  productSwitcher.innerHTML = "";

  products.forEach((product, index) => {
    const btn = document.createElement("button");
    btn.className = `switch-btn ${index === selectedProductIndex ? "active" : ""}`;
    btn.textContent = `Product ${index + 1}`;
    btn.addEventListener("click", () => selectProduct(index));
    productSwitcher.appendChild(btn);
  });
}

function setMode(mode) {
  currentMode = mode;

  wallModeBtn.classList.toggle("active", mode === "wall");
  floorModeBtn.classList.toggle("active", mode === "floor");

  if (mode === "wall") {
    overlayFrame.style.background = "#6f4a2d";
    overlayFrame.style.padding = "10px";
    overlayFrame.style.border = "3px solid #4e321d";
    overlayShadow.style.display = "block";
    overlayWrapper.style.top = "35%";
    overlayWrapper.classList.add("wall-locked");
    isPlaced = false;
    overlayState.rotation = -2;
  } else {
    overlayFrame.style.background = "transparent";
    overlayFrame.style.padding = "0";
    overlayFrame.style.border = "none";
    overlayShadow.style.display = "block";
    overlayWrapper.style.top = "72%";
    overlayWrapper.classList.remove("wall-locked");
    isPlaced = false;
    overlayState.rotation = 0;
  }

  resetOverlayState(false);
}

function selectProduct(index) {
  selectedProductIndex = index;
  const product = products[index];

  cameraProductTitle.textContent = product.name;
  cameraArtist.textContent = `Artist: ${product.artist}`;
  cameraLocation.textContent = `Location: ${product.location}`;
  cameraStory.textContent = product.story;

  productOverlay.src = product.overlay;
  productOverlay.alt = product.name;

  renderProductSwitcher();
  setMode(product.mode);
}

function resetOverlayState(updateModeTop = true) {
  overlayState = {
    x: 0,
    y: 0,
    scale: 1,
    rotation: currentMode === "wall" ? -2 : 0,
    opacity: 1
  };

  isPlaced = false;

  if (updateModeTop) {
    if (currentMode === "wall") {
      overlayWrapper.style.top = "35%";
    } else {
      overlayWrapper.style.top = "72%";
    }
  }

  opacityRange.value = 100;
  applyOverlayTransform();
}

function applyOverlayTransform() {
  overlayWrapper.style.transform =
    `translate(-50%, -50%) translate(${overlayState.x}px, ${overlayState.y}px) scale(${overlayState.scale}) rotate(${overlayState.rotation}deg)`;

  productOverlay.style.opacity = overlayState.opacity;
}

async function startCamera() {
  try {
    if (cameraStream) {
      stopCamera();
    }

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" }
      },
      audio: false
    });

    cameraPreview.srcObject = cameraStream;
    cameraPlaceholder.style.display = "none";

    if (currentMode === "wall") {
      cameraStatus.textContent = "Camera is on. Tap on the wall area to place the art.";
    } else {
      cameraStatus.textContent = "Camera is on. Drag the product and adjust it.";
    }
  } catch (error) {
    console.error(error);
    cameraStatus.textContent = "Camera access failed. Use localhost or HTTPS and allow permission.";
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }

  cameraPreview.srcObject = null;
  cameraPlaceholder.style.display = "grid";
  cameraStatus.textContent = "Camera is off.";
}

function startDrag(clientX, clientY) {
  if (currentMode === "wall" && isPlaced) return;

  isDragging = true;
  startX = clientX;
  startY = clientY;
  initialX = overlayState.x;
  initialY = overlayState.y;
}

function dragMove(clientX, clientY) {
  if (!isDragging) return;

  const dx = clientX - startX;
  const dy = clientY - startY;

  overlayState.x = initialX + dx;
  overlayState.y = initialY + dy;

  applyOverlayTransform();
}

function endDrag() {
  isDragging = false;
}

cameraStage.addEventListener("click", (e) => {
  if (currentMode !== "wall") return;
  if (!cameraStream) return;

  const rect = cameraStage.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  overlayState.x = e.clientX - centerX;
  overlayState.y = e.clientY - centerY;

  applyOverlayTransform();
  isPlaced = true;
  cameraStatus.textContent = "Wall art placed on the wall.";
});

overlayWrapper.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startDrag(e.clientX, e.clientY);
});

window.addEventListener("mousemove", (e) => {
  dragMove(e.clientX, e.clientY);
});

window.addEventListener("mouseup", endDrag);

overlayWrapper.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startDrag(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  dragMove(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener("touchend", endDrag);

zoomInBtn.addEventListener("click", () => {
  overlayState.scale += 0.1;
  applyOverlayTransform();
});

zoomOutBtn.addEventListener("click", () => {
  overlayState.scale = Math.max(0.2, overlayState.scale - 0.1);
  applyOverlayTransform();
});

rotateLeftBtn.addEventListener("click", () => {
  overlayState.rotation -= 5;
  applyOverlayTransform();
});

rotateRightBtn.addEventListener("click", () => {
  overlayState.rotation += 5;
  applyOverlayTransform();
});

resetOverlayBtn.addEventListener("click", () => {
  resetOverlayState();
  if (currentMode === "wall") {
    cameraStatus.textContent = "Reset done. Tap on the wall area to place again.";
  } else {
    cameraStatus.textContent = "Reset done.";
  }
});

opacityRange.addEventListener("input", () => {
  overlayState.opacity = Number(opacityRange.value) / 100;
  applyOverlayTransform();
});

wallModeBtn.addEventListener("click", () => setMode("wall"));
floorModeBtn.addEventListener("click", () => setMode("floor"));

startCameraBtn.addEventListener("click", startCamera);
stopCameraBtn.addEventListener("click", stopCamera);

takeShotBtn.addEventListener("click", () => {
  if (!cameraPreview.videoWidth || !cameraPreview.videoHeight) {
    cameraStatus.textContent = "Open the camera first before taking a screenshot.";
    return;
  }

  const canvas = captureCanvas;
  const ctx = canvas.getContext("2d");

  canvas.width = cameraPreview.videoWidth;
  canvas.height = cameraPreview.videoHeight;

  ctx.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

  const stageRect = cameraStage.getBoundingClientRect();
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
    ctx.globalAlpha = overlayState.opacity;
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

      ctx.drawImage(tempImg, -w / 2, -h / 2, w, h);
    } else {
      ctx.drawImage(tempImg, -w / 2, -h / 2, w, h);
    }

    ctx.restore();

    const dataURL = canvas.toDataURL("image/png");
    capturedImage.src = dataURL;
    downloadShot.href = dataURL;
    screenshotBox.classList.add("show");
    cameraStatus.textContent = "Screenshot captured successfully.";
  };

  tempImg.src = productOverlay.src;
});

renderProducts();
selectProduct(0);
applyOverlayTransform();