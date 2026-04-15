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
    document.body.classList.toggle("menu-open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let rafId = null;
  let nextX = window.innerWidth * 0.5;
  let nextY = window.innerHeight * 0.18;

  const paintPointer = () => {
    document.documentElement.style.setProperty("--pointer-x", `${nextX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${nextY}px`);
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
