/* =========================================================
   VIDEO CONFIG
   ========================================================= */
const VIDEO_URLS = {
  VIDEO_URL_1: "https://res.cloudinary.com/amksgr5n/video/upload/v1789563912/Nick_Crease_0-1_video-converter.com.mp4",
  VIDEO_URL_2: "https://res.cloudinary.com/amksgr5n/video/upload/v1789563256/Sam_0-1_video-converter.com.mp4",
  VIDEO_URL_3: "",
  VIDEO_URL_4: ""
};

/* =========================================================
   PROJECT CONTENT
   ========================================================= */
const PROJECTS = [
  {
    video: "VIDEO_URL_1",
    title: "Video 1",
    size: "wide"
  },
  {
    video: "VIDEO_URL_2",
    title: "Video 2",
    size: "half"
  },
  {
    video: "VIDEO_URL_3",
    title: "Video 3",
    size: "half"
  },
  {
    video: "VIDEO_URL_4",
    title: "Video 4",
    size: "wide"
  }
];

/* =========================================================
   CERTIFICATION CONFIG
   ========================================================= */
const CERTIFICATES = [
  {
    name: "Adobe Premiere Pro",
    issuer: "Adobe Certified",
    image: "adobe-certified-professional-in-digital-video-using.png",
    link: "https://www.credly.com/badges/a150279e-a67b-40f8-aeaf-4ad40b49e4cf/public_url"
  },
  {
    name: "After Effects — VFX & Motion Graphics",
    issuer: "Adobe Certified",
    image: "adobe-certified-professional-in-visual-effects-and-.png",
    link: "https://www.credly.com/badges/8b7a6fed-3fe1-417a-8a18-676bf68f161e/public_url"
  },
  {
    name: "Certified Professional, Video Design",
    issuer: "Adobe Certified",
    image: "adobe-certified-professional-in-video-design.png",
    link: "https://www.credly.com/badges/8f72ac6d-48e2-47e4-b6be-f25ab492759d/public_url"
  }
];

/* =========================================================
   RENDER SELECTED WORK
   ========================================================= */
const workGrid = document.getElementById("workGrid");

PROJECTS.forEach(p => {
  const url = VIDEO_URLS[p.video];

  const item = document.createElement("div");
  item.className = "work-item work-item--" + p.size;

  /*
    If a video exists:
    → show the video normally.

    If there is no video yet:
    → keep the video area,
    → show the striped/grid pattern,
    → no play button,
    → no "Add your video" text.
  */
  const mediaHTML = url
    ? `<video src="${url}" muted loop playsinline preload="metadata" poster=""></video>`
    : `<div class="work-placeholder work-placeholder--empty"></div>`;

  item.innerHTML = `
    <div class="work-media">${mediaHTML}</div>

    <div class="work-body">
      <div class="work-title">${p.title}</div>
    </div>
  `;

  if (url) {
    const vid = item.querySelector("video");

    // Preview ao passar o mouse — sem áudio
    item.addEventListener("mouseenter", () => {
      vid.muted = true;
      vid.play().catch(() => {});
    });

    // Para e volta ao início ao tirar o mouse
    item.addEventListener("mouseleave", () => {
      vid.pause();
      vid.currentTime = 0;
      vid.muted = true;
    });

    // Clique — ativa o áudio
    item.addEventListener("click", () => {
      vid.muted = false;
      vid.play().catch(() => {});
    });
  }

  workGrid.appendChild(item);
});

/* =========================================================
   RENDER CERTIFICATIONS
   ========================================================= */
const certRow = document.getElementById("certRow");

CERTIFICATES.forEach(c => {
  const el = document.createElement(c.link ? "a" : "div");
  el.className = "cert-badge";

  if (c.link) {
    el.href = c.link;
    el.target = "_blank";
    el.rel = "noopener";
  }

  const iconHTML = c.image
    ? `<img src="${c.image}" alt="${c.name} badge">`
    : `<div class="cert-icon-fallback">ADD<br>BADGE</div>`;

  el.innerHTML = `
    ${iconHTML}
    <div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
    </div>
  `;

  certRow.appendChild(el);
});

/* =========================================================
   NAV SCROLL STATE
   ========================================================= */
const nav = document.getElementById("siteNav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

/* =========================================================
   MOBILE NAV TOGGLE
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

/* =========================================================
   FOOTER YEAR
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
