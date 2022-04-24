const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
