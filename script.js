const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const year = document.querySelector("[data-year]");
const profileImage = document.querySelector("[data-profile-image]");
const profilePlaceholder = document.querySelector("[data-profile-placeholder]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

if (profileImage && profilePlaceholder) {
  profileImage.addEventListener("load", () => {
    profilePlaceholder.classList.add("is-hidden");
  });

  profileImage.addEventListener("error", () => {
    profileImage.classList.add("is-hidden");
    profilePlaceholder.classList.remove("is-hidden");
  });
}
