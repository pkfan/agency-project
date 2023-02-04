// navbar sciprt
const navbar = document.querySelector("#navbar");

document.addEventListener("scroll", (event) => {
  if (window.scrollY >= 80) {
    console.log(" if (window.scrollY >= 100) {");
    navbar.classList.remove("absolute");
    navbar.classList.add("-top-24");
    navbar.classList.add("fixed");
    navbar.classList.remove("navbar");

    if (window.scrollY >= 90) {
      navbar.classList.add("navbarAnimationRule");
    }
  } else {
    navbar.classList.add("absolute");
    navbar.classList.remove("fixed");
    navbar.classList.remove("-top-24");
    navbar.classList.add("navbar");
    navbar.classList.remove("navbarAnimationRule");
  }
});
