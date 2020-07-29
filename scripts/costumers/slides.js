export const cosSlides = () => {
  // Set counter/ preCounter
  let counter = 0;
  let preCounter = 0;
  // Create short cut for all the 3 elements to be slided
  const el = document.querySelectorAll(".cos-global");
  // Creathe shortcuts for the dots div (activeBtn)
  const dots = document.querySelectorAll(".costumers-dots div");
  // Set function that clear all classes from the sliders
  const clearClasses = () => {
    for (let i = 0; i <= 2; i++) {
      el[i].className = "cos-global";
    }
  };
  // Creathe function that changed the activeBtn
  const activeBtn = () => {
    // First Remove the previous
    document
      .querySelector(".costumers-dot-active")
      .classList.remove("costumers-dot-active");
    // Than add
    dots[counter].classList.add("costumers-dot-active");
  };
  // Create the slide left function
  const moveLeft = () => {
    // Move out the current element
    el[preCounter].classList.add("cos-slide-left");
    // Enter the nexe element
    el[counter].classList.add("cos-right-to-center");
  };
  const moveRight = () => {
    // Move out the current element
    el[preCounter].classList.add("cos-slide-right");
    // Enter the nexe element
    el[counter].classList.add("cos-left-to-center");
  };
  // Create the slide function
  const slide = (side) => {
    // Increase / Decrease the counter based on the clicked arrow
    if (side === "left") {
      counter--;
    } else {
      counter++;
    }
    // Keep the counter inside the elements range
    if (counter > 2) {
      counter = 0;
    } else if (counter < 0) {
      counter = 2;
    }
    // Clear the classes
    clearClasses();
    // Move out the current element based on the side parameter
    if (side === "left") {
      moveRight();
    } else {
      moveLeft();
    }
    // Call the activeBtn
    activeBtn();
    // Update the preCounter
    preCounter = counter;
  };
  // Add event listeneres to the arrows
  document
    .querySelector(".costumers-arrow-left")
    .addEventListener("click", () => {
      slide("left");
    });
  document
    .querySelector(".costumers-arrow-right")
    .addEventListener("click", () => {
      slide();
    });

  // Create function that change slide and the activeBtn fron the dots
  const slideFromDots = (e) => {
    // Set the counter to the element index
    counter = parseInt(e.target.getAttribute("index"));
    // Clear classes
    clearClasses();
    // Slide elemetns based on the counter / preCounter
    if (counter > preCounter) {
      moveLeft();
    } else {
      moveRight();
    }
    activeBtn();
    // Update the preCounter
    preCounter = counter;
  };
  // Create the event listeners for the dots
  for (let i = 0; i <= 2; i++) {
    dots[i].addEventListener("click", slideFromDots);
  }
};
