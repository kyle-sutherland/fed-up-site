// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", menuOpen);
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
    menuOpen = false;
    menuBtn.setAttribute("aria-expanded", false);
  }
});

// Newsletter form handling
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const successMessage = document.getElementById("successMessage");

    if (name && email) {
      successMessage.classList.remove("hidden");
      successMessage.textContent = `Thanks for signing up, ${name}!`;

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";

      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 5000);
    }
  });
