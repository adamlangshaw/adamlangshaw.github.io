const root = document.documentElement;
const body = document.body;

document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const nav = document.getElementById("site-nav");
if (nav) {
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 18);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const menuBtn = document.getElementById("nav-menu-btn");
const navLinks = document.getElementById("nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    body.classList.toggle("menu-open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      body.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });
}

initScrollProgress();
initPointerWash();
initCommandPalette();
initSectionRail();

function initScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  body.prepend(progress);

  const update = () => {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const amount = Math.min(1, Math.max(0, window.scrollY / scrollable));
    progress.style.transform = `scaleX(${amount})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

function initPointerWash() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let rafId = null;
  let nextX = window.innerWidth * 0.5;
  let nextY = window.innerHeight * 0.18;

  const paintPointer = () => {
    root.style.setProperty("--pointer-x", `${nextX}px`);
    root.style.setProperty("--pointer-y", `${nextY}px`);
    rafId = null;
  };

  const queuePointer = (x, y) => {
    nextX = x;
    nextY = y;
    if (rafId === null) {
      rafId = window.requestAnimationFrame(paintPointer);
    }
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      queuePointer(event.clientX, event.clientY);
    },
    { passive: true }
  );
}

function initCommandPalette() {
  const navInner = document.querySelector(".nav-inner");
  if (!navInner) return;

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "nav-quick-open";
  openButton.setAttribute("aria-label", "Open quick navigation");
  openButton.innerHTML = `<span>Quick Open</span><kbd>${/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl K"}</kbd>`;

  if (menuBtn) {
    navInner.insertBefore(openButton, menuBtn);
  } else {
    navInner.appendChild(openButton);
  }

  const overlay = document.createElement("div");
  overlay.className = "command-palette";
  overlay.innerHTML = `
    <div class="command-backdrop" data-close-palette="true"></div>
    <div class="command-surface" role="dialog" aria-modal="true" aria-label="Quick open">
      <div class="command-head">
        <input class="command-input" type="text" placeholder="Search pages, projects, and actions" aria-label="Search quick navigation">
      </div>
      <div class="command-list" role="listbox"></div>
    </div>
  `;
  body.appendChild(overlay);

  const input = overlay.querySelector(".command-input");
  const list = overlay.querySelector(".command-list");
  let filteredCommands = [];
  let activeIndex = 0;

  const isHome = /(^|\/)index\.html$/.test(window.location.pathname) || window.location.pathname === "/";
  const commands = [
    command("Home", "Overview and featured work", "index.html"),
    command("About", "Merged home section", isHome ? "#about" : "index.html#about"),
    command("Trajectory", "Research, writing, and tools", isHome ? "#trajectory" : "index.html#trajectory"),
    command("Work", "Projects and writing highlights", isHome ? "#work" : "index.html#work"),
    command("Projects", "Interactive tools", "projects.html"),
    command("Health Policy Simulator", "Coverage, cost, and access model", "health-policy-simulator.html"),
    command("Algorithmic Bias Explorer", "Clinical fairness explainer", "algorithmic-bias-explorer.html"),
    command("Writing", "Stanford Daily work", "writing.html"),
    command("Research", "Publications and academic work", "research.html"),
    command("Influences", "Reading and ideas", "influences.html"),
    command("Contact", "Email, LinkedIn, and links", "contact.html"),
    command("Email Adam", "Open a new message", "mailto:me@adamlangshaw.com", "Action"),
    command("LinkedIn", "Professional profile", "https://www.linkedin.com/in/adamlangshaw/", "Action"),
  ];

  function command(label, hint, href, meta = "Page") {
    return { label, hint, href, meta, search: `${label} ${hint}`.toLowerCase() };
  }

  function openPalette() {
    overlay.classList.add("is-open");
    body.classList.add("palette-open");
    input.value = "";
    renderCommands("");
    window.setTimeout(() => input.focus(), 10);
  }

  function closePalette() {
    overlay.classList.remove("is-open");
    body.classList.remove("palette-open");
  }

  function runCommand(item) {
    closePalette();
    if (/^https?:/i.test(item.href)) {
      window.open(item.href, "_blank", "noopener");
      return;
    }
    window.location.href = item.href;
  }

  function renderCommands(query) {
    const needle = query.trim().toLowerCase();
    filteredCommands = commands.filter((item) => item.search.includes(needle));
    activeIndex = 0;

    if (!filteredCommands.length) {
      list.innerHTML = `<p class="command-empty">No matching page or action.</p>`;
      return;
    }

    list.innerHTML = filteredCommands
      .map(
        (item, index) => `
          <button class="command-item${index === activeIndex ? " is-active" : ""}" type="button" data-command-index="${index}">
            <div>
              <strong>${item.label}</strong>
              <span>${item.hint}</span>
            </div>
            <span class="command-meta">${item.meta}</span>
          </button>
        `
      )
      .join("");
  }

  function syncActiveItem() {
    list.querySelectorAll(".command-item").forEach((item, index) => {
      item.classList.toggle("is-active", index === activeIndex);
    });
  }

  openButton.addEventListener("click", openPalette);
  overlay.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close-palette='true']");
    if (closeTarget) {
      closePalette();
      return;
    }

    const commandTarget = event.target.closest("[data-command-index]");
    if (!commandTarget) return;
    const index = Number(commandTarget.dataset.commandIndex);
    if (filteredCommands[index]) {
      runCommand(filteredCommands[index]);
    }
  });

  input.addEventListener("input", () => renderCommands(input.value));
  input.addEventListener("keydown", (event) => {
    if (!filteredCommands.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % filteredCommands.length;
      syncActiveItem();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = (activeIndex + filteredCommands.length - 1) % filteredCommands.length;
      syncActiveItem();
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(filteredCommands[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
    }
  });

  document.addEventListener("keydown", (event) => {
    const openShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (openShortcut) {
      event.preventDefault();
      if (overlay.classList.contains("is-open")) {
        closePalette();
      } else {
        openPalette();
      }
      return;
    }

    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closePalette();
    }
  });
}

function initSectionRail() {
  const rail = document.querySelector(".section-rail");
  if (!rail) return;

  const links = Array.from(rail.querySelectorAll("a[href^='#']"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        setActive(visible.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  sections.forEach((section) => observer.observe(section));
}
