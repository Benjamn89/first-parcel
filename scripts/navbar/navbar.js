export const navbar = () => {
  const openNav = () => {
    const myNav = document.querySelectorAll(".nav-click-close div");
    myNav[0].classList.toggle("nav-open-down");
    myNav[2].classList.toggle("nav-open-up");
    myNav[1].classList.toggle("nav-open-display");
  };
  document.querySelector(".nav-click-close").addEventListener("click", openNav);

  const openSq = (e) => {
    if (document.querySelector(".nav-sq-hover")) {
      document.querySelector(".nav-sq-hover").classList.remove("nav-sq-hover");
    }
    e.target.firstChild.nextElementSibling.classList.add("nav-sq-hover");
  };

  for (var i = 0; i <= 4; i++) {
    document
      .querySelectorAll(".open-nav-on-sq > div")
      [i].addEventListener("mouseenter", openSq);
  }

  document
    .querySelector(".open-nav-on-sq")
    .addEventListener("mouseleave", () => {
      if (document.querySelector(".nav-sq-hover")) {
        document
          .querySelector(".nav-sq-hover")
          .classList.remove("nav-sq-hover");
      }
    });

  // Open the nav when click on the hamburger
  document.querySelector(".nav-click-close").addEventListener("click", () => {
    document
      .querySelector(".open-nav-on-sq")
      .classList.toggle("nav-click-close-open");
  });
};
