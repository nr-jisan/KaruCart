
const artists = [
  {
    id:'farzana-akter', name:'Farzana Akter', district:'Jashore, Bangladesh', specialty:'Nakshi Kantha & Textile Storytelling', years:'12 years experience',
    bio:'Farzana transforms traditional stitch language into premium wall pieces and collectible textile art for contemporary interiors.',
    philosophy:'Every stitch should carry memory, tenderness, and dignity.',
    longBio:'Working with thread, cloth, memory, and inherited motifs, Farzana creates textile pieces that feel deeply rooted yet highly refined. Her practice focuses on preserving storytelling traditions while presenting them in a form that suits modern homes, galleries, and collectors.',
    achievements:['Community mentor for emerging women artisans','Curated in local cultural fairs','Known for premium finishing and custom motifs'],
    skills:['Hand embroidery','Motif composition','Color harmony','Framing and finishing'],
    featured:true
  },
  {
    id:'mrinmoy-dey', name:'Mrinmoy Dey', district:'Khulna, Bangladesh', specialty:'Folk-inspired Canvas Painting', years:'9 years experience',
    bio:'Mrinmoy blends folk memory, rural atmosphere, and minimal modern composition into statement paintings.',
    philosophy:'Culture should feel alive, not frozen in nostalgia.',
    longBio:'Mrinmoy paints with layered restraint. His works borrow emotional rhythm from folk references but present them with contemporary balance, muted sophistication, and collector-friendly execution.',
    achievements:['Featured in independent art circles','Known for textured mixed media surfaces','Works commissioned for boutique interiors'],
    skills:['Acrylic layering','Mixed media texture','Collector curation','Interior scale planning'],
    featured:true
  },
  {
    id:'rakib-hasan', name:'Rakib Hasan', district:'Cumilla, Bangladesh', specialty:'Cane & Wood Furniture Craft', years:'15 years experience',
    bio:'Rakib designs furniture that feels warm, light, handmade, and suitable for modern spaces.',
    philosophy:'Furniture should be useful first, beautiful always.',
    longBio:'Rakib works at the meeting point of practicality and artistry. His cane and wood pieces are shaped to feel breathable, elegant, and rooted in the craft language of Bangladesh while fitting clean contemporary interiors.',
    achievements:['Produced custom pieces for interior projects','Specialist in cane weave finishing','Known for durable handcrafted joinery'],
    skills:['Wood finishing','Cane weaving','Joinery','Interior styling sense'],
    featured:true
  },
  {
    id:'samia-noor', name:'Samia Noor', district:'Rajshahi, Bangladesh', specialty:'Ceramic & Terracotta Surface Art', years:'11 years experience',
    bio:'Samia creates terracotta and ceramic pieces with soft earthy tones, sculpted texture, and gallery-friendly finishing.',
    philosophy:'Clay should still feel like earth, even after it becomes art.',
    longBio:'Samia works with terracotta memory, carved geometry, and a restrained palette to create decorative objects and wall-ready surfaces that feel grounded, elegant, and deeply local. Her practice is especially suited to collectors who want handmade warmth with a refined visual language.',
    achievements:['Featured in regional craft showcases','Known for matte terracotta finishing','Creates small-batch collectible decor'],
    skills:['Clay forming','Terracotta carving','Kiln finishing','Surface texturing'],
    featured:true
  }
];

const assetImages = {
  artists: {
    'farzana-akter': 'assets/images/artists/farzana-akter.jpg',
    'mrinmoy-dey': 'assets/images/artists/mrinmoy-dey.jpg',
    'rakib-hasan': 'assets/images/artists/rakib-hasan.jpg',
    'samia-noor': 'assets/images/artists/samia-noor.jpg'
  },
  products: {
    'nakshi-dream-frame': 'assets/images/products/nakshi-dream-frame.jpg',
    'golden-river-canvas': 'assets/images/products/golden-river-canvas.jpg',
    'cane-light-stool': 'assets/images/products/cane-light-stool.jpg',
    'heritage-thread-panel': 'assets/images/products/heritage-thread-panel.jpg',
    'folk-echo-painting': 'assets/images/products/folk-echo-painting.jpg',
    'woven-side-piece': 'assets/images/products/woven-side-piece.jpg',
    'river-bloom-kantha': 'assets/images/products/river-bloom-kantha.jpg',
    'monsoon-lightscape': 'assets/images/products/monsoon-lightscape.jpg',
    'terracotta-sun-disc': 'assets/images/products/terracotta-sun-disc.jpg',
    'clay-story-vase': 'assets/images/products/clay-story-vase.jpg'
  },
  site: {
    heroFeature: 'assets/images/site/hero-feature.jpg',
    brandStory: 'assets/images/site/brand-story.jpg',
    studioPoster: 'assets/images/site/studio-film-poster.jpg',
    craftVideoPoster: 'assets/images/site/craft-video-poster.jpg'
  },
  videos: {
    homeStudioFilm: 'assets/videos/home-studio-film.mp4'
  }
};
function productImage(id){ return assetImages.products[id] || ''; }
function artistImage(id){ return assetImages.artists[id] || ''; }
function bgStyle(url){ return url ? ` style="background-image:url('${url}')"` : ''; }


const products = [
  {
    id:'nakshi-dream-frame', name:'Nakshi Dream Frame', category:'Textile Wall Art', price:4800, artistId:'farzana-akter', featured:true,
    story:'A poetic embroidered wall piece inspired by village memory, river rhythm, and heirloom warmth.',
    description:'Designed as a premium wall statement, this piece combines heritage motif language with clean framing so that it fits modern apartments, boutique cafes, work lounges, and collector homes.',
    longDescription:'This work is made to feel intimate from a distance and rich up close. The framing gives structure while the hand stitching gives emotional texture. It is ideal for buyers who want both visual softness and cultural identity in one artwork.',
    materials:'Cotton fabric, premium thread, protective frame, archival backing', dimensions:'18 × 24 inches', care:'Display indoors, avoid direct moisture, dust gently with a microfiber cloth.', shipping:'Packed with layered protection, certificate card, artist story card, and care guide.',
    making:['Motif sketching','Thread palette curation','Hand embroidery','Framing and quality finishing'], certificate:'KC-NDF-2026-001',
    edition:'Curated Edition', authenticity:'Signed artist certificate included',
    featuredQuote:'This frame is meant to feel like inherited tenderness presented as collectible design.', video:'assets/videos/nakshi-dream-frame.mp4'
  },
  {
    id:'golden-river-canvas', name:'Golden River Canvas', category:'Painting', price:6200, artistId:'mrinmoy-dey', featured:true,
    story:'A layered painting inspired by sunlight on slow water and the stillness of rural afternoons.',
    description:'This mixed-media canvas carries movement without noise. It works beautifully in study rooms, lounges, reception spaces, and statement walls that need warmth without clutter.',
    longDescription:'The work uses soft directional flow, controlled texture, and folk memory to create something that feels calm yet alive. It is especially suitable for interiors that want cultural depth with modern restraint.',
    materials:'Canvas, acrylic, textured medium, protective varnish', dimensions:'24 × 30 inches', care:'Keep away from harsh water and prolonged direct sunlight.', shipping:'Protective edge guards, padded wrap, artist note, and certificate included.',
    making:['Concept sketch','Base wash layering','Texture and tone balancing','Final sealing'], certificate:'KC-GRC-2026-002', edition:'Studio Selection', authenticity:'Numbered authenticity card included',
    featuredQuote:'Color should move like memory — quietly, but with presence.', video:'assets/videos/golden-river-canvas.mp4'
  },
  {
    id:'cane-light-stool', name:'Cane Light Stool', category:'Furniture', price:7600, artistId:'rakib-hasan', featured:true,
    story:'A refined handcrafted stool that turns everyday function into a warm interior accent.',
    description:'Lightweight but expressive, this stool works beside reading chairs, bedsides, studio corners, and curated retail interiors.',
    longDescription:'The structure is practical, yet the woven seat and natural finish give it the warmth of a handcrafted object. It is ideal for people who want furniture with softness, character, and artisan credibility.',
    materials:'Seasoned wood, handwoven cane, matte finish', dimensions:'16 × 16 × 20 inches', care:'Indoor use recommended. Wipe dry and avoid standing water.', shipping:'Secure boxed packaging with soft wrapping and care insert.',
    making:['Wood sizing','Frame assembly','Hand weaving','Polish and inspection'], certificate:'KC-CLS-2026-003', edition:'Interior Craft Series', authenticity:'Craft certificate and maker note included',
    featuredQuote:'A useful object can still feel personal, calm, and beautifully made.', video:'assets/videos/cane-light-stool.mp4'
  },
  {
    id:'heritage-thread-panel', name:'Heritage Thread Panel', category:'Textile Decor', price:5400, artistId:'farzana-akter', featured:true,
    story:'A vertical textile composition for elegant hallway or reading-corner placement.', description:'A premium long-format thread artwork designed for narrow walls and architectural corners.', longDescription:'This piece works well in places that need a vertical visual pause — such as hallway ends, stair landings, prayer corners, or boutique displays.', materials:'Fabric, hand threadwork, mounting support', dimensions:'12 × 36 inches', care:'Indoor display only. Avoid direct humidity.', shipping:'Flat layered pack with protective sheet.', making:['Layout planning','Pattern transfer','Detailed stitch work','Mounting'], certificate:'KC-HTP-2026-004', edition:'Collector Vertical', authenticity:'Story card with authenticity seal'
  },
  {
    id:'folk-echo-painting', name:'Folk Echo Painting', category:'Painting', price:6800, artistId:'mrinmoy-dey', featured:true,
    story:'A collector-friendly piece with symbolic forms and muted folk-inspired drama.', description:'Elegant enough for formal interiors, warm enough for personal collections.', longDescription:'The visual structure balances emotion and restraint. This makes it suitable for buyers who want a culturally rooted painting without overly loud color.', materials:'Canvas, acrylic, mixed media', dimensions:'20 × 28 inches', care:'Keep dry and away from harsh sunlight.', shipping:'Certificate and protected wrap included.', making:['Drafting','Color blocking','Symbol layering','Finishing coat'], certificate:'KC-FEP-2026-005', edition:'Collector Tone', authenticity:'Signed detail card'
  },
  {
    id:'woven-side-piece', name:'Woven Side Piece', category:'Furniture', price:8900, artistId:'rakib-hasan', featured:true,
    story:'A small handcrafted side unit that adds tactile warmth to bedrooms and lounges.', description:'Beautiful as a side table, display surface, or decorative utility piece.', longDescription:'Made with practical proportions and a calm finish, this piece is ideal for homes that appreciate natural materials and visible craftsmanship.', materials:'Wood, cane panel, natural finish', dimensions:'18 × 14 × 22 inches', care:'Indoor use only. Wipe with dry cloth.', shipping:'Protective packing with maker card.', making:['Wood shaping','Joinery','Panel weaving','Surface finish'], certificate:'KC-WSP-2026-006', edition:'Home Craft Edit', authenticity:'Craft authentication slip'
  },
  {
    id:'river-bloom-kantha', name:'River Bloom Kantha', category:'Textile Wall Art', price:5900, artistId:'farzana-akter', featured:true,
    story:'A bloom-filled stitched composition inspired by riverbank flowers and festival fabrics.', description:'Softly layered threadwork designed to bring warmth, color, and handmade quietness to white interiors.', longDescription:'The piece balances floral rhythm with a curated frame, making it suitable for dining nooks, lounges, and bedrooms that need a handcrafted focal point without visual heaviness.', materials:'Cotton textile, dyed thread, framed backing', dimensions:'20 × 20 inches', care:'Keep dry and display away from damp walls.', shipping:'Gift-ready layered wrap with certificate and artist card.', making:['Pattern drawing','Thread selection','Hand stitching','Mounting and finish'], certificate:'KC-RBK-2026-007', edition:'Seasonal Curated Drop', authenticity:'Signed certificate included'
  },
  {
    id:'monsoon-lightscape', name:'Monsoon Lightscape', category:'Painting', price:7100, artistId:'mrinmoy-dey', featured:true,
    story:'A moody painting of rain-washed light, open fields, and distant rural stillness.', description:'Muted, atmospheric, and refined — ideal for homes that prefer emotion over noise.', longDescription:'Built with layered washes and softened edges, this canvas captures the calm drama of monsoon evenings in a way that suits modern, minimal, or earth-toned interiors.', materials:'Canvas, acrylic wash, texture paste', dimensions:'22 × 30 inches', care:'Avoid direct water contact and prolonged heat.', shipping:'Corner-protected wrap with verification slip.', making:['Mood sketch','Layered wash','Texture balance','Protective seal'], certificate:'KC-MLS-2026-008', edition:'Atmosphere Series', authenticity:'Artist-linked record included'
  },
  {
    id:'terracotta-sun-disc', name:'Terracotta Sun Disc', category:'Ceramic Wall Decor', price:4600, artistId:'samia-noor', featured:true,
    story:'A circular terracotta wall piece carved with sunburst rhythm and earthy elegance.', description:'A sculpted decorative work for entryways, gallery walls, and warm-toned interiors.', longDescription:'This piece is designed to feel both ancient and contemporary. Its carved surface catches light beautifully and creates shadow depth that changes through the day.', materials:'Terracotta clay, matte seal, hanging mount', dimensions:'16 inch diameter', care:'Indoor display recommended. Dust gently with a dry brush.', shipping:'Foam-supported box with certificate note.', making:['Clay shaping','Sun motif carving','Kiln firing','Matte sealing'], certificate:'KC-TSD-2026-009', edition:'Earth Form Collection', authenticity:'Verified maker certificate'
  },
  {
    id:'clay-story-vase', name:'Clay Story Vase', category:'Ceramic Decor', price:5200, artistId:'samia-noor', featured:true,
    story:'A handmade terracotta vase with carved band patterns inspired by woven village textures.', description:'Decorative and sculptural, this vase is suited for consoles, shelves, and statement corners.', longDescription:'The silhouette is calm and balanced while the carved surface brings touchable detail. It works beautifully with dried botanicals or as a standalone art object.', materials:'Terracotta, hand carving, natural seal', dimensions:'14 × 9 inches', care:'Best for dry floral display. Wipe gently with dry cloth.', shipping:'Padded pack with artist card and care note.', making:['Forming','Hand carving','Controlled firing','Finishing polish'], certificate:'KC-CSV-2026-010', edition:'Craft Object Edit', authenticity:'Curated authenticity card'
  }
];

const state = { cart: JSON.parse(localStorage.getItem('karucart-cart-v2') || '[]') };
const money = n => `৳${n.toLocaleString()}`;
const byId = id => document.getElementById(id);
const getArtist = id => artists.find(a => a.id === id);
const getProduct = id => products.find(p => p.id === id);
const qs = () => new URLSearchParams(location.search);
const saveCart = () => localStorage.setItem('karucart-cart-v2', JSON.stringify(state.cart));

function updateHeaderBehavior(){
  const header=document.querySelector('.site-header'); if(!header) return;
  let lastY=window.scrollY;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    if(y<=20){header.classList.remove('header-hidden'); lastY=y; return;}
    if(y>lastY+5) header.classList.add('header-hidden');
    else if(y<lastY-5) header.classList.remove('header-hidden');
    lastY=y;
  });
}
function setupMobileMenu(){
  const btn=byId('mobileMenuBtn'), panel=byId('mobilePanel');
  if(!btn||!panel) return;
  btn.addEventListener('click',()=>panel.classList.toggle('show'));
}
function updateCartCount(){
  const count=state.cart.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);
}
function getToastWrap(){
  let wrap=document.querySelector('.toast-wrap');
  if(!wrap){
    wrap=document.createElement('div');
    wrap.className='toast-wrap';
    document.body.appendChild(wrap);
  }
  return wrap;
}
function showToast(title, text){
  const wrap=getToastWrap();
  const toast=document.createElement('div');
  toast.className='toast';
  toast.innerHTML=`<div class="toast-head"><div style="display:flex;align-items:center;gap:10px"><div class="toast-icon">✓</div><div><strong>${title}</strong></div></div><button class="toast-close" aria-label="Close">×</button></div><p>${text}</p><div class="toast-actions"><a class="primary" href="cart.html">View cart</a><button type="button" class="toast-continue">Continue</button></div>`;
  wrap.appendChild(toast);
  const remove=()=>{ toast.style.opacity='0'; toast.style.transform='translateY(10px)'; setTimeout(()=>toast.remove(),220); };
  toast.querySelector('.toast-close').addEventListener('click', remove);
  toast.querySelector('.toast-continue').addEventListener('click', remove);
  setTimeout(remove, 3200);
}
function addToCart(id){
  const p=getProduct(id); const found=state.cart.find(i=>i.id===id);
  if(found) found.qty += 1; else state.cart.push({id, qty:1});
  saveCart(); updateCartCount();
  if(p) showToast('Added to cart', `${p.name} has been added to your curated order.`);
}
function changeQty(id, delta){
  const item=state.cart.find(i=>i.id===id); if(!item) return;
  item.qty += delta; if(item.qty<=0) state.cart=state.cart.filter(i=>i.id!==id); saveCart(); updateCartCount(); renderCartPage();
}
function productVisual(id,title){return `<div class="product-media" data-title="${title}"${bgStyle(productImage(id))}></div>`}
function artistVisual(id,title){return `<div class="artist-media" data-title="${title}"${bgStyle(artistImage(id))}></div>`}
function compactText(text, max=88){ if(!text) return ''; return text.length>max ? text.slice(0,max).trim()+"…" : text; }
function cardProduct(p){ const a=getArtist(p.artistId); return `
  <article class="product-card">${productVisual(p.id,p.name)}
    <div class="card-body"><span class="tag">${p.category}</span><h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
    <p class="small muted">By <a href="artist.html?id=${a.id}">${a.name}</a></p><p class="card-desc">${compactText(p.story, 92)}</p>
    <div class="card-meta"><strong class="product-price">${money(p.price)}</strong><div style="display:flex;gap:10px"><a class="btn btn-secondary btn-small" href="product.html?id=${p.id}">Details</a><button class="btn btn-small" data-add-cart="${p.id}">Add to cart</button></div></div></div>
  </article>`; }
function cardArtist(a){ return `
  <article class="artist-card">${artistVisual(a.id,a.name)}
    <div class="card-body"><span class="tag">${a.district}</span><h3><a href="artist.html?id=${a.id}">${a.name}</a></h3>
    <p class="small muted">${compactText(a.specialty, 30)}</p><p class="card-desc">${compactText(a.bio, 78)}</p>
    <div class="artist-meta"><a class="btn btn-secondary btn-small" href="artist.html?id=${a.id}">View profile</a><span class="small muted">${products.filter(p=>p.artistId===a.id).length} works</span></div></div>
  </article>`; }

function getHomeCounts(){
  return {
    productCount: 9,
    artistCount: 3
  };
}

function renderHome(){
  const { productCount, artistCount } = getHomeCounts();
  byId('featuredProducts').innerHTML = products.slice(0, productCount).map(cardProduct).join('');
  byId('featuredArtists').innerHTML = artists.slice(0, artistCount).map(cardArtist).join('');
  const hv = byId('homeVideo');
  if(hv){ const src=assetImages.videos.homeStudioFilm || ''; hv.innerHTML = `<div class="video-panel">${src ? `<video class="video-placeholder" controls playsinline src="${src}"></video>` : `<div class="video-placeholder"><div class="play-badge">▶</div></div>`}<div class="video-meta"><div><span class="eyebrow">Studio Film</span><h3 style="font-family:Georgia,serif;font-size:34px;margin:12px 0 8px">Behind the making of Bangladeshi craft</h3><p class="muted">Replace the poster with your own workshop, artist interview, or making-process video by using <strong>assets/videos/home-studio-film.mp4</strong>.</p></div><a class="btn btn-secondary" href="artworks.html">Explore collection</a></div></div>`; }
}
function renderArtistsPage(){ byId('artistList').innerHTML = artists.map(cardArtist).join(''); }
function renderArtworksPage(){ byId('artworkList').innerHTML = products.map(cardProduct).join(''); }
function renderArtistDetail(){
  const a=getArtist(qs().get('id') || artists[0].id); if(!a) return;
  byId('artistHero').innerHTML = `
    <div class="detail-visual" data-title="${a.name}"${bgStyle(artistImage(a.id))}></div>
    <div><span class="eyebrow">Artist Profile</span><h1>${a.name}</h1><p>${a.longBio}</p>
      <div class="meta-list"><div><span>Specialty</span><strong>${a.specialty}</strong></div><div><span>District</span><strong>${a.district}</strong></div><div><span>Experience</span><strong>${a.years}</strong></div><div><span>Philosophy</span><strong>${a.philosophy}</strong></div></div>
    </div>`;
  byId('artistStory').innerHTML = `<div class="quote-block">“${a.philosophy}”</div>`;
  byId('artistAchievements').innerHTML = `<div class="detail-card card-body"><h3>Achievements</h3><ul class="bullet-list">${a.achievements.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  byId('artistSkills').innerHTML = `<div class="detail-card card-body"><h3>Craft Skills</h3><ul class="bullet-list">${a.skills.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  byId('artistWorks').innerHTML = products.filter(p=>p.artistId===a.id).map(cardProduct).join('');
}
function renderProductDetail(){
  const p=getProduct(qs().get('id') || products[0].id); if(!p) return; const a=getArtist(p.artistId);
  byId('productHero').innerHTML = `
    <div><div class="detail-visual" data-title="${p.name}"${bgStyle(productImage(p.id))}></div>
      <div class="gallery-grid"><div class="thumb" data-label="Front View"${bgStyle(productImage(p.id))}></div><div class="thumb" data-label="Texture Detail"${bgStyle(productImage(p.id))}></div><div class="thumb" data-label="Styled Interior"${bgStyle(productImage(p.id))}></div></div></div>
    <div><span class="eyebrow">${p.category}</span><h1>${p.name}</h1><p>${p.description}</p>
      <div class="price-wrap"><div><div class="small muted">Curated price</div><div class="price">${money(p.price)}</div></div><button class="btn" data-add-cart="${p.id}">Add to cart</button></div>
      <div class="meta-list"><div><span>Artist</span><strong><a href="artist.html?id=${a.id}">${a.name}</a></strong></div><div><span>Materials</span><strong>${p.materials}</strong></div><div><span>Dimensions</span><strong>${p.dimensions}</strong></div><div><span>Edition</span><strong>${p.edition || 'Curated Edition'}</strong></div><div><span>Authenticity</span><strong>${p.authenticity || 'Certificate included'}</strong></div></div>
    </div>`;
  byId('productStory').innerHTML = `<div class="quote-block">“${p.featuredQuote || p.story}”</div>`;
  byId('productDetails').innerHTML = `
    <div class="grid-2">
      <div class="detail-card card-body"><h3>Story</h3><p>${p.story}</p><p>${p.longDescription}</p></div>
      <div class="detail-card card-body"><h3>What arrives with the piece</h3><ul class="bullet-list"><li>Authenticity certificate</li><li>Artist story card</li><li>Care guide</li><li>Protected premium packaging</li></ul></div>
      <div class="detail-card card-body"><h3>Care guide</h3><p>${p.care}</p></div>
      <div class="detail-card card-body"><h3>Shipping concept</h3><p>${p.shipping}</p></div>
    </div>`;
  byId('makingSteps').innerHTML = `<div class="detail-card card-body"><h3>How it is made</h3><ol class="steps">${p.making.map(x=>`<li>${x}</li>`).join('')}</ol></div>`;
  byId('certificateBox').innerHTML = `<div class="detail-card card-body"><h3>Authenticity & certificate</h3><div class="certificate-meta"><div><strong>Certificate Code:</strong> ${p.certificate}</div><div><strong>Edition:</strong> ${p.edition || 'Curated Edition'}</div><div><strong>Verification Page:</strong> <a href="certificate.html?id=${p.id}">View digital certificate</a></div></div></div>`;
  if(byId('productVideo')){
    const src = p.video || '';
    byId('productVideo').innerHTML = `<div class="section-head"><div><span class="eyebrow">Video Story</span><h2>See the artwork in motion</h2><p class="muted">This section can hold your own product video, process film, or styled room presentation.</p></div></div><div class="video-panel"><div class="inline-video ${src ? '' : 'fallback'}">${src ? `<video controls playsinline src="${src}"></video>` : `<div class="play-badge">▶</div>`}</div><div class="video-meta"><div><h3 style="font-family:Georgia,serif;font-size:30px;margin:0 0 8px">${p.name} film section</h3><p class="muted">Replace this placeholder with your own MP4 video to show how the piece is made, displayed, or styled in a room.</p></div><a class="btn btn-secondary" href="certificate.html?id=${p.id}">View certificate</a></div></div>`;
  }
  byId('relatedWorks').innerHTML = products.filter(x=>x.artistId===a.id && x.id!==p.id).slice(0,3).map(cardProduct).join('');
}
function renderCartPage(){
  const wrap=byId('cartItemsPage'); if(!wrap) return;
  if(!state.cart.length){ wrap.innerHTML=`<div class="detail-card card-body"><h3>Your cart is empty</h3><p class="muted">Browse the curated collection and add a few handcrafted pieces.</p><a class="btn" href="artworks.html">Explore artworks</a></div>`; if(byId('cartSummary')) byId('cartSummary').innerHTML=''; return; }
  const items=state.cart.map(i=>{const p=getProduct(i.id), a=getArtist(p.artistId); return `
    <div class="cart-row"><div class="cart-thumb" data-title="${p.name}"${bgStyle(productImage(p.id))}></div><div><h3 style="margin:0 0 6px">${p.name}</h3><p class="small muted">By ${a.name}</p><p class="muted">${p.story}</p><div class="qty-wrap"><button data-qty="-1" data-id="${p.id}">−</button><span>${i.qty}</span><button data-qty="1" data-id="${p.id}">+</button></div></div><strong>${money(p.price*i.qty)}</strong></div>`}).join('');
  wrap.innerHTML=items;
  const subtotal=state.cart.reduce((s,i)=>s+getProduct(i.id).price*i.qty,0), shipping=350, total=subtotal+shipping;
  byId('cartSummary').innerHTML=`<div class="checkout-box card-body"><h3>Order Summary</h3><div class="meta-list"><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>Curated packaging</span><strong>${money(shipping)}</strong></div><div><span>Total</span><strong>${money(total)}</strong></div></div><a class="btn" style="margin-top:18px;width:100%" href="checkout.html">Proceed to checkout</a></div>`;
}
function renderCheckout(){
  const subtotal=state.cart.reduce((s,i)=>s+getProduct(i.id).price*i.qty,0), shipping=350, total=subtotal+shipping;
  const summary = state.cart.length ? state.cart.map(i=>{const p=getProduct(i.id); return `<div class="meta-list"><div><span>${p.name} × ${i.qty}</span><strong>${money(p.price*i.qty)}</strong></div></div>`}).join('') : '<p class="muted">No items in cart.</p>';
  if(byId('checkoutSummary')) byId('checkoutSummary').innerHTML=`<div class="checkout-box card-body"><h3>Order summary</h3>${summary}<div class="meta-list"><div><span>Shipping</span><strong>${money(shipping)}</strong></div><div><span>Total</span><strong>${money(total)}</strong></div></div><a class="btn" style="margin-top:18px;width:100%" href="confirmation.html">Confirm demo order</a></div>`;
}
function renderConfirmation(){
  const orderNo = 'KC-ORD-' + new Date().getFullYear() + '-' + String(new Date().getMonth()+1).padStart(2,'0') + String(new Date().getDate()).padStart(2,'0');
  if(byId('orderNumber')) byId('orderNumber').textContent = orderNo;
  if(byId('confirmedItems')) byId('confirmedItems').innerHTML = state.cart.map(i=>{const p=getProduct(i.id); return `<li>${p.name} × ${i.qty}</li>`}).join('') || '<li>No cart items found.</li>';
}
function renderCertificate(){
  const p=getProduct(qs().get('id') || products[0].id), a=getArtist(p.artistId); if(!p) return;
  byId('certificatePanel').innerHTML=`<div class="certificate-shell"><div class="certificate-paper"><div class="cert-kicker"><div class="cert-brand"><span class="eyebrow">Official Verification</span><h2>KaruCart</h2><p>Curated Bangladeshi art & craft verification record</p></div><div class="cert-seal">VERIFIED<br>ARTWORK</div></div><h1 class="cert-title">Certificate of Authenticity</h1><p class="cert-lead">This document certifies that <strong>${p.name}</strong> is a curated artist-linked work presented by KaruCart and created by <strong>${a.name}</strong>. The piece has been assigned the following reference information for identity, storytelling, and future traceability.</p><div class="cert-grid"><div class="cert-box"><h4>Artwork</h4><div class="cert-value">${p.name}</div><p class="muted">${p.story}</p></div><div class="cert-box"><h4>Certificate Code</h4><div class="cert-value">${p.certificate}</div><p class="muted">Verified demo record</p></div><div class="cert-box"><h4>Artist</h4><div class="cert-value">${a.name}</div><p class="muted">${a.specialty}</p></div><div class="cert-box"><h4>Edition & Status</h4><div class="cert-value">${p.edition || 'Curated Edition'}</div><p class="muted">Status: Verified by KaruCart</p></div></div><div class="cert-footer"><div class="sig-line"><strong>KaruCart Curatorial Desk</strong><span class="muted">Issued by platform verification</span></div><div class="sig-line"><strong>${a.name}</strong><span class="muted">Artist attribution record</span></div><div class="sig-line"><div class="cert-qr"></div><span class="muted">Future QR verification area</span></div></div><div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:28px"><a class="btn" href="product.html?id=${p.id}">Back to artwork</a><a class="btn btn-secondary" href="artworks.html">Browse collection</a></div></div></div>`;
}

function setupRevealAnimations(){
  const targets=[...document.querySelectorAll('.section, .section-tight, .product-card, .artist-card, .detail-card, .value-card, .timeline-card, .testimonial, .kpi, .stat, .video-panel')];
  targets.forEach(el=>el.classList.add('reveal'));
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('is-visible'); });
  },{threshold:.12});
  targets.forEach(el=>io.observe(el));
}

function bindEvents(){
  document.addEventListener('click', e=>{
    const add=e.target.closest('[data-add-cart]'); if(add){ addToCart(add.dataset.addCart); }
    const qty=e.target.closest('[data-qty]'); if(qty){ changeQty(qty.dataset.id, Number(qty.dataset.qty)); }
  });
}
function init(){
  updateHeaderBehavior(); setupMobileMenu(); updateCartCount(); bindEvents();
  const page=document.body.dataset.page;
  if(page==='home') {
    renderHome();
    let resizeTimer;
    window.addEventListener('resize', ()=>{
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderHome, 120);
    });
  }
  if(page==='artists') renderArtistsPage();
  if(page==='artworks') renderArtworksPage();
  if(page==='artist') renderArtistDetail();
  if(page==='product') renderProductDetail();
  if(page==='cart') renderCartPage();
  if(page==='checkout') renderCheckout();
  if(page==='confirmation') renderConfirmation();
  if(page==='certificate') renderCertificate();
  setupRevealAnimations();
}
document.addEventListener('DOMContentLoaded', init);
