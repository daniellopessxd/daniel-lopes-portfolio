  /* =========================================================
     VIDEO CONFIG
     Replace each empty string below with your Cloudinary
     video URL. Leave empty to keep showing a placeholder.
     ========================================================= */
  const VIDEO_URLS = {
    VIDEO_URL_1: "https://res.cloudinary.com/amksgr5n/video/upload/v1789563912/Nick_Crease_0-1_video-converter.com.mp4",
    VIDEO_URL_2: "https://res.cloudinary.com/amksgr5n/video/upload/v1789563256/Sam_0-1_video-converter.com.mp4",
    VIDEO_URL_3: "",
    VIDEO_URL_4: ""
  };

  /* =========================================================
     PROJECT CONTENT
     Edit title / description / tag freely. "size" controls
     the mosaic layout: "wide" (full width) or "half" (2-up).
     ========================================================= */
  const PROJECTS = [
    {
      video: "VIDEO_URL_1",
      title: "The Psychology of Procrastination",
      desc: "A talking-head breakdown re-cut for short-form, with motion graphics visualizing each point as it's made.",
      tag: "Psychology",
      size: "wide"
    },
    {
      video: "VIDEO_URL_2",
      title: "3 Money Habits That Keep You Broke",
      desc: "Fast-paced financial education edit using pattern interrupts and on-screen typography to hold attention.",
      tag: "Finance",
      size: "half"
    },
    {
      video: "VIDEO_URL_3",
      title: "How to Lead Without a Title",
      desc: "Leadership talking-head content with B-roll layered in to illustrate real workplace scenarios.",
      tag: "Leadership",
      size: "half"
    },
    {
      video: "VIDEO_URL_4",
      title: "Deep Work in a Distracted World",
      desc: "A productivity short built around clean cuts and sound design to mirror the focus it's teaching.",
      tag: "Productivity",
      size: "wide"
    }
  ];

  /* =========================================================
     CERTIFICATION CONFIG
     Add an image URL and/or a link for each certificate.
     Leave "image" empty to show a plain placeholder badge.
     ========================================================= */
  const CERTIFICATES = [
    { name: "Adobe Premiere Pro", issuer: "Adobe Certified", image: "", link: "" },
    { name: "After Effects — VFX & Motion Graphics", issuer: "Adobe Certified", image: "", link: "" },
    { name: "Certified Professional, Video Design", issuer: "Adobe Certified", image: "", link: "" }
  ];

  // ---- render selected work ----
  const workGrid = document.getElementById("workGrid");
  PROJECTS.forEach(p => {
    const url = VIDEO_URLS[p.video];
    const item = document.createElement("div");
    item.className = "work-item work-item--" + p.size;

    const mediaHTML = url
      ? `<video src="${url}" muted loop playsinline preload="metadata" poster=""></video>`
      : `<div class="work-placeholder">
           <div class="play-ring"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
           <span>Add your video</span>
           <code>${p.video}</code>
         </div>`;

    item.innerHTML = `
      <div class="work-media">${mediaHTML}</div>
      <div class="work-body">
        <div>
          <div class="work-title">${p.title}</div>
          <p class="work-desc">${p.desc}</p>
        </div>
        <span class="work-tag">${p.tag}</span>
      </div>
    `;

    if (url) {
      const vid = item.querySelector("video");
      item.addEventListener("mouseenter", () => vid.play().catch(() => {}));
      item.addEventListener("mouseleave", () => { vid.pause(); vid.currentTime = 0; });
    }

    workGrid.appendChild(item);
  });

  // ---- render certifications ----
  const certRow = document.getElementById("certRow");
  CERTIFICATES.forEach(c => {
    const el = document.createElement(c.link ? "a" : "div");
    el.className = "cert-badge";
    if (c.link) { el.href = c.link; el.target = "_blank"; el.rel = "noopener"; }

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

  // ---- nav scroll state ----
  const nav = document.getElementById("siteNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  // ---- mobile nav toggle ----
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

  // ---- scroll reveal ----
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

  // ---- footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();
