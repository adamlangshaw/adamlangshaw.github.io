// Footer year
document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Nav: add scrolled class for background
const nav = document.getElementById("site-nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Nav: mobile menu toggle (text button, not hamburger)
const menuBtn = document.getElementById("nav-menu-btn");
const navLinks = document.getElementById("nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });
  // Close on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });
}
