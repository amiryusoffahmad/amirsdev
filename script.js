/* =========================
   THEME
========================= */

const themeToggle =
  document.getElementById("themeToggle");

const root =
  document.documentElement;


/* Load saved theme */

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {

  root.setAttribute(
    "data-theme",
    "light"
  );

} else {

  root.setAttribute(
    "data-theme",
    "dark"
  );

}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

  const currentTheme =
    root.getAttribute("data-theme");

  if (currentTheme === "light") {

    root.setAttribute(
      "data-theme",
      "dark"
    );

    localStorage.setItem(
      "theme",
      "dark"
    );

  } else {

    root.setAttribute(
      "data-theme",
      "light"
    );

    localStorage.setItem(
      "theme",
      "light"
    );

  }

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking link */

const navItems =
  navLinks.querySelectorAll("a");

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


/* =========================
   SCROLL ANIMATION
========================= */

const fadeElements =
  document.querySelectorAll(".fade-up");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.1
    }

  );


fadeElements.forEach((element) => {

  observer.observe(element);

});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header =
  document.querySelector("header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    header.style.borderBottomColor =
      "var(--border-strong)";

  } else {

    header.style.borderBottomColor =
      "var(--border)";

  }

});


/* =========================
   ESCAPE KEY
   Close mobile menu
========================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    navLinks.classList.remove("active");

  }

});