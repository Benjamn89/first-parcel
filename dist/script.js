const header = () => {
  let counter = 0;
  let preCounter = 0;
  const slides = document.querySelectorAll(".all-slides");

  const clearClasses = () => {
    slides[counter].className = "all-slides";
    slides[preCounter].className = "all-slides";
  };
  const slideLeft = () => {
    clearClasses();
    slides[preCounter].classList.add("slide-left");
    slides[counter].classList.add("right-to-center");
  };
  const slideRight = () => {
    clearClasses();
    slides[preCounter].classList.add("slide-right");
    slides[counter].classList.add("left-to-center");
  };

  // Create function that change the slide
  const sliding = (who) => {
    preCounter = counter;
    if (who === "plus") {
      counter++;
    } else {
      counter--;
    }
    if (counter > 2) {
      counter = 0;
    }
    if (counter < 0) {
      counter = 2;
    }
    if (who === "plus") {
      slideLeft();
    } else {
      slideRight();
    }
  };

  // Create event listeneres for the arrows
  document
    .querySelector(".header-arrow-right")
    .addEventListener("click", (e) => {
      sliding("plus");
    });
  document.querySelector(".header-arrow-left").addEventListener("click", () => {
    sliding();
  });
  // Create event listeners for the little dots
  for (let i = 0; i <= 2; i++) {
    document
      .querySelectorAll(".header-dots div")
      [i].addEventListener("click", (e) => {
        // Retrive the index
        const index = parseInt(e.target.getAttribute("index"));
        // Update the counter and the preCounter
        preCounter = counter;
        counter = index;
        if (counter > preCounter) {
          slideLeft();
        } else if (counter < preCounter) {
          slideRight();
        }
      });
  }
};
header();
const navbar = () => {
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
navbar();
