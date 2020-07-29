export const header = () => {
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

  // Create function that changed the active btn
  const changeActiveBtn = () => {
    document
      .querySelector(".head-active-dot")
      .classList.remove("head-active-dot");
    dots[counter].classList.add("head-active-dot");
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
    changeActiveBtn();
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
  // 01. Create shortcuts for the dots div
  const dots = document.querySelectorAll(".header-dots div");
  for (let i = 0; i <= 2; i++) {
    dots[i].addEventListener("click", (e) => {
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
      // Call the active btn function
      changeActiveBtn();
    });
  }
};
