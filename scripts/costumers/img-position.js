export const cosImagePosition = () => {
  if (window.screen.width > 1435) {
    // Create shortcut for the img element
    const img = document.querySelector(".costumers-img");
    // Create a boolean to check if the document have event listener or not
    let haveEvent;
    // function that decide if to active the event listner on page loading or not
    window.innerWidth > 1435 ? (haveEvent = true) : (haveEvent = false);
    // active/ disable the event listner on screen change
    window.onresize = () => {
      if (window.innerWidth < 1435 && haveEvent === true) {
        img.removeEventListener("mousemove", changeBackground);
        haveEvent = false;
      } else if (window.innerWidth > 1435 && haveEvent === false) {
        img.addEventListener("mousemove", changeBackground);
        haveEvent = true;
      }
    };
    // Create the mousemove function
    const changeBackground = (e) => {
      if (
        e.pageY / e.clientY < 5.2 &&
        e.pageY / e.clientY > 4.1 &&
        !img.classList.contains("cos-obj-center")
      ) {
        // Clear classes
        img.className = "costumers-img";
        // Add class
        img.classList.add("cos-obj-center");
      } else if (
        e.pageY / e.clientY < 4 &&
        !img.classList.contains("cos-obj-bottom")
      ) {
        // Clear
        img.className = "costumers-img";
        // Add
        img.classList.add("cos-obj-bottom");
      } else if (
        !img.classList.contains("cos-obj-top") &&
        e.pageY / e.clientY > 6
      ) {
        // Clear
        img.className = "costumers-img";
        // Add
        img.classList.add("cos-obj-top");
      }
    };
    // If screen size greather than so the event listener will be added
    if (haveEvent === true) {
      document
        .querySelector(".costumers-img")
        .addEventListener("mousemove", changeBackground);
    }
  }
};
